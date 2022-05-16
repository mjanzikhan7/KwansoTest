import Realm from 'realm';
import { CONSTANTS } from '../constants';
export const GROCERYDB = 'groceryDB';
export const GROCERYLIST = 'groceryLists';
export const GROCERY_ITEM = 'groceryItem';

export const LIST_ITEM_Schema = {
  name: GROCERY_ITEM,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: {type: 'string', indexed: true},
  },
};

export const GroceryList_Schema = {
  name: GROCERYLIST,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    isScratched:'bool',
    creationDate: 'date',
  },
};

export const GroceryDB_Schema = {
  name: GROCERYDB,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    creationDate: 'date',
    status:'string',
    list: {type: 'list', objectType: GROCERYLIST},
  },
};

const databaseOptions = {
  path: 'jkhan.grocerylistapp',
  schema: [GroceryDB_Schema,LIST_ITEM_Schema, GroceryList_Schema],
  schemaVersion: 1, // optional
};

export const insertNewGroceryList = newGroceryList =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(GROCERYDB, newGroceryList);
          resolve(newGroceryList);
        });
      })
      .catch(error => reject(error));
  });

export const insertNewGroceryItem = (id,item) =>

      new Promise((resolve, reject) => {
        Realm.open(databaseOptions)
          .then(realm => {
            realm.write(() => {
              let requiredList = realm.objectForPrimaryKey(
                GROCERYDB,
                id,
              );
              requiredList.list.push(item)
              console.log(JSON.stringify(requiredList))
              resolve(requiredList);
            });
          })
          .catch(error => reject(error));
  });

export const updateGroceryList = grocertyList =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let updatingGroceryList = realm.objectForPrimaryKey(
            GROCERYDB,
            grocertyList.id,
          );
          updatingGroceryList.status = CONSTANTS.COMPLETE;
          resolve();
        });
      })
      .catch(error => reject(error));
  });

  export const updateGroceryItem = grocertyItem =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let updatingGroceryItem = realm.objectForPrimaryKey(
            GROCERYLIST,
            grocertyItem.id,
          );
          updatingGroceryItem.isScratched = true;
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const deleteList = listId =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deletingList = realm.objectForPrimaryKey(
            GROCERYDB,
            listId,
          );
          realm.delete(deletingList);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

  export const deleteListItem = listId =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deletingList = realm.objectForPrimaryKey(
            GROCERYLIST,
            listId,
          );
          realm.delete(deletingList);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const deleteAllLists = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allLists = realm.objects(GroceryList_Schema);
          realm.delete(allLists);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const queryListItems = (listId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allItems = realm.objectForPrimaryKey(
            GROCERYDB,
            listId,
          );
          resolve(allItems);
        });
      })
      .catch(error => reject(error));
  });

  export const getAllLists = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allLists = realm.objects(GROCERYDB).sorted('creationDate', true);
          resolve(allLists);
        });
      })
      .catch(error => reject(error));
  });

  export const filterNonScratchedItems = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allLists = realm.objects(GROCERYDB).sorted('creationDate', true);
          resolve(allLists);
        });
      })
      .catch(error => reject(error));
  });


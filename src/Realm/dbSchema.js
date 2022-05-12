import Realm from 'realm';
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
    creationDate: 'date',
    list: {type: 'list', objectType: GROCERY_ITEM},
  },
};

const databaseOptions = {
  path: 'jkhan.grocerylist',
  schema: [LIST_ITEM_Schema, GroceryList_Schema],
  schemaVersion: 0, // optional
};

export const insertNewGroceryList = newGroceryList =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(GROCERYLIST, newGroceryList);
          resolve(newGroceryList);
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
            GROCERYLIST,
            grocertyList.id,
          );
          updatingGroceryList.name = grocertyList.name;
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

export const queryAllLists = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allLists = realm.objects(GROCERYLIST);
          resolve(allLists);
        });
      })
      .catch(error => reject(error));
  });
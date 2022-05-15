import { CONSTANTS } from "../constants";
import {updateGroceryList} from '../Realm/dbSchema2'

export const getLatestList=(allLists) =>{
        for(let i = 0; i<allLists.length;i++){
        if(allLists[i].status === CONSTANTS.PENDIND)
            return allLists[i];
    }
}

export const markListComplete=(listObject,callBack) =>{
    let {list} = listObject;
    let isComplete = false
    for(let i = 0; i<list.length;i++){
    if(list[i].isScratched === true){
        isComplete = true
    }else{
        isComplete = false
        return

    }   
}
if(isComplete){
    updateGroceryList(listObject).then(()=>{callBack()})
    .catch(err => alert(`Update operation failed ${err}`));
}
}
export default function reducer(state=[],action){
    switch (action.type){
        case "ADD_TODO":
            return [...state,{id:action.id,text:action.text,complete:false}];
            default:
            return state;
    }
}
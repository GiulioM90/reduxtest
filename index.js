import { createStore } from "https://unpkg.com/redux@4.0.5/es/redux.mjs";
// import { createStore } from 'redux'

const initialState = {
    buttonClicked : "no"
};


function rootReducer(state = initialState, action){
//     if(action.type === "BUTTON_CLICKED"){
       //    change state
//     }
//     if(action.type === "MODAL_CLOSED"){

//     }
// ricordare che sia gli if che gli switch devono tornare sempre lo stato
switch(action.type){
    case "BUTTON_CLICKED":
        // il cambio di stato  non è corretto
        state.buttonClicked = "yes";
        return state;
        break;
    case "MODALE_CLOSED":
        // change state
        return state;
        break;

    default :
        return state;
}
}


const store = createStore(rootReducer)
// UI
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function () {
    // il dispatch funge da azione, send a message
    store.dispatch({type:'BUTTON_CLICKED'});
})

// notifies about state change
store.subscribe(function(){
    // check the state
    if(store.getState().buttonClicked === "yes"){
        const div = document.getElementById("my-div");
        div.style.display = "block"; 
    }
})
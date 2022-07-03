
const Main = {
  namespaced: true,

    state () {
      return {
        sampleState: undefined

      }
    },

    mutations: {
        sampleMutation (state, payload) {
        },
    },

    getters: {
      sampleGetter(state){
        return (payload) => {
            
        }
      }
    },

    actions: {
      sampleFunction({commit, state, getters, dispatch}, payload){
        
      }


    }    

};

export default Main;

//商城Vuex-actions
export default{
    saveUserName(content,username){
        content.commit('saveUserName',username);
    },
    saveCartCount(content,cartCount){
        content.commit('saveCartCount',cartCount);
    }
}
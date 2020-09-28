import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        proLists:[],
        isLogin:false
    },
    mutations:{
        addCart(state,proList){
            for(let i=0;i<state.proLists.length;i++){
                if(state.proLists[i].proName==proList.proName){
                    state.proLists[i].proNum++;
                    return
                }
            }
            state.proLists.push(proList);
        },
        enter(state,ent){
            if(ent.name==''|| ent.name==null){
                console.log(ent.name)
                console.log(ent.pass)
                alert("请输入正确的用户名")
            } else if(ent.pass=='' || ent.pass==null || ent.pass!=111){
                alert("请输入正确的密码");
                console.log(ent.name)
                console.log(ent.pass)
                return;
            };
            if(ent.name==123456 && ent.pass==111){
                state.isLogin=true;      
            }        
        }
    }
})

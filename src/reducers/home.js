/**
 * Created by Administrator on 2016/7/2.
 */
import * as type from "../actions/type";
// 初始化状态
let initNavList = {
    historyArray: []
};

export function home(state = initNavList, action) {
    switch (action.type) {
        case type.RECEIVE_HISTORY:
            return {
                ...state,   //三个点是展开符
                historyArray: action.historyArray
            };
        default:
            return {...state};
    }
}
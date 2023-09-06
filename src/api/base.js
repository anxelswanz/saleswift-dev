const base = {
    host: 'http://localhost:8080/',
    getList: 'api/region/getList',
    getUser: 'api/user/getUser',
    followUser: 'api/user/follow',
    getFollowers: 'api/user/getFollowers',
    getFollowing: 'api/user/getFollowing',
    ifFollow: 'api/user/ifFollow',
    getUserById: 'api/user/getUserById',
    verifycode: 'api/user/verifycode',
    uploadPhoto: 'api/items/upload',
    saveItem: 'api/items/save',
    getByCategory: 'api/items/getByCategory',
    getItemByItemId: 'api/items/getItemByItemId',
    //收藏
    ifAddFav: 'api/items/ifAddFav',
    getFavItems: 'api/items/getFavItems',
    favInit: 'api/items/favInit',
    //查看我的post
    getMyPost: 'api/items/getMyPost',
    //删除post
    deleteMyPost: 'api/items/deleteMyPost',
    //充值
    topup: 'api/user/topup',
    //查看购买的
    showPurchase: 'api/items/showPurchase',
    //订单
    createOrder: 'api/order/createOrder',


}

export default base
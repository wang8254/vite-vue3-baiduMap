const mutations ={
  SET_ROUTERS: (state: { addRouters: any; }, routers: any) => {
    state.addRouters = routers;
  },
  SET_PERMISSIONS: (state: { permissions: any; }, permissions: any) => {
    state.permissions = permissions;
  }
}
export default mutations
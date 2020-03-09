export const state = () => ({
  me: null,
  followerList: [],
  followingList: [],
  hasMoreFollower: true,
  hasMoreFollowing: true
});

const totalFollowers = 8;
const totalFollowing = 6;
const limit = 3;

export const mutations = {
  //단순한 동기적 작업을 시킬 때 사용한다.
  setMe(state, payload) {
    state.me = payload; //payload는 회원 정보
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  },
  addFollowing({ commit }, payload) {
    state.followerList.push(payload);
  },

  addFollower({ commit }, payload) {
    state.followingList.push(payload);
  },

  removeFollowing(state, payload) {
    const index = state.followingList.findIndex(v => v.id === payload.id);
    state.followingList.splice(index, 1);
  },

  removeFollower(state, payload) {
    const index = state.followerList.findIndex(v => v.id === payload.id);
    state.followerList.splice(index, 1);
  },
  loadFollowings(state) {
    const diff = totalFollowing;
    const fakeUsers = Array(diff > limit ? limit : diff)
      .fill()
      .map(v => ({
        id: Math.random().toString(),
        nickname: Math.floor(Math.random() * 1000)
      }));

    state.followingList = state.followingList.concat(fakeUsers);
    state.hasMoreFollowing = fakeUsers.length === limit;
  },
  loadFollowers(state) {
    const diff = totalFollowing;
    const fakeUsers = Array(diff > limit ? limit : diff)
      .fill()
      .map(v => ({
        id: Math.random().toString(),
        nickname: Math.floor(Math.random() * 1000)
      }));

    state.followingList = state.followerList.concat(fakeUsers);
    state.hasMoreFollowing = fakeUsers.length === limit;
  }
};

export const actions = {
  // 비동기적인, 서버통신 등의 복잡한 작업이 들어 간다.
  signUp(
    { commit, dispatch, state, rootState, getters, rootGetters },
    payload
  ) {
    //commit은 mutations을 실행시키는 거, displatch는 actions를 실행시키는 거,
    commit("setMe", payload); // 유저의 상태를 바꾸기 위해 사용
  },
  login({ commit, dispatch, state, rootState, getters, rootGetters }, payload) {
    commit("setMe", payload);
  },
  logOut(
    { commit, dispatch, state, rootState, getters, rootGetters },
    payload
  ) {
    commit("setMe", null); // 로그아웃 하는 거다.
  },
  changeNickname({ commit }, payload) {
    commit("changeNickname", payload);
  },
  addFollowing({ commit }, payload) {
    commit("addFollowing", payload);
  },
  addFollower({ commit }, payload) {
    commit("addFollower", payload);
  },
  removeFollowing({ commit }, payload) {
    // 비동기 요청이 들어감
    commit("removeFollowing", payload);
  },
  removeFollower({ commit }, payload) {
    commit("removeFollower", payload);
  },
  loadFollowers({ commit }, payload) {
    if (state.hasMoreFollower) {
      commit("loadFollowers");
    }
  },
  loadFollowings({ commit }, payload) {
    if (state.hasMoreFollowing) {
      commit("loadFollowings");
    }
  }
};

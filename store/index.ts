export const state = () => ({
    os: "none",
    theme: "light"
})


export const mutations = {
    OS_CHANGE(state: any, value: any) {
        state.os = value
    },

    THEME_TOGGLE(state: any){
        if(state.theme == "dark") state.theme = "light"
        else state.theme = "dark"
    }
}
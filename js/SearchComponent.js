Vue.component('search', {
    template: `
        <form action="#" class="search-form" @submit.prevent='$root.filterSearch()'>
            <input type="text" class="search-field" v-model="$root.userSearch">
            <button class="btn-search" type="submit">
                <img src="img/seach_logo.svg" alt="search icon">
            </button>
        </form>
    `
});
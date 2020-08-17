class User {
    /**
     * 
     * @param {By default we will use the localStorage unless the value of db is 'server'} db 
     */
    constructor(db = 'local'){
        if(db === 'local'){
            const json = localStorage.getItem('user');
            json = JSON.parse(json);
        }

        this.user = json.data;
    }

    displayName(){
        return this.user.displayName;
    }

    avatar(){
        return this.user.avatar ?? "gravatar";
    }

    position(){
        return this.user.position
    }

    twitter(){
        return this.user.twitter;
    }


}

const userData = {
    firstName : 'Chris',
    lastName : 'Hemsworth',
    displayPhoto : './public/DP1.jpg',
    classType : 'men',
    displayGender : 'displayMen',
    styling : 'man',
    buttonStyle : 'buttonMen',
    location : 'Australia',
    languages : 'English',
    memberSince : 'Nov 2004',
    status : 0
}

const app = Vue.createApp({
    data(){
        return userData
    },
    methods : {
        async changeLayout(){
            if(this.status == 0){
                this.firstName = 'Jennifer',
                this.lastName = 'Lawerence',
                this.displayPhoto = './public/DP2.webp',
                this.classType = 'women',
                this.displayGender = 'displayWomen',
                this.styling = 'woman',
                this.buttonStyle = 'buttonWomen',
                this.location = 'USA',
                this.languages = 'English',
                this.memberSince = 'Jan 2009',
                this.status = 1
            }else{
                this.firstName = 'Chris',
                this.lastName = 'Hemsworth',
                this.displayPhoto = './public/DP1.jpg',
                this.classType = 'men',
                this.displayGender = 'displayMen',
                this.styling = 'man',
                this.buttonStyle = 'buttonMen',
                this.location = 'Australia',
                this.languages = 'English',
                this.memberSince = 'Nov 2004',
                this.status = 0
            }
        }
    }
})

app.mount('#app')
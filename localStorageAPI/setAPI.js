var clubs =[
    {
        FcardTitle:'Dance',
        FcardDescription:'This Is Dance Group',
        FcardImage:'dance.jpeg',
        FcardButton:'./joinPages/danceJoin.html',
        JcoverImage:'../media/danceCover.jpg',
        JcoverTitle:'Dance Club',
        JcoverDescription:'This is Description',
        changeFcardTitle:function(string){
            this.FcardTitle=string;
        },
        changeFcardDescription:function(string){
            this.FcardDescription = string;
        },
        changeJcoverImage:function(string){
            this.JcoverImage = string;
        },
        changeJcoverTitle:function(string){
            this.JcoverTitle = string;
        },
        changecoverDescription:function(string){
            this.JcoverDescription = string;
        }
    },
    {
        FcardTitle:'Music',
        FcardDescription:'This Is Music Group',
        FcardImage:'music.jpg',
        FcardButton:'./joinPages/musicJoin.html',
        JcoverImage:'../media/musicCover.jpg',
        JcoverTitle:'Music Club',
        JcoverDescription:'This is Description',
        changeFcardTitle: function(string){
            this.FcardTitle = string;
        },
        changeFcardDescription:function(string){
            this.FcardDescription = string;
        },
        changeJcoverImage:function(string){
            this.JcoverImage = string;
        },
        changeJcoverTitle:function(string){
            this.JcoverTitle = string;
        },
        changecoverDescription:function(string){
            this.JcoverDescription = string;
        }
    },
    {
        FcardTitle:'Coding',
        FcardDescription:'This Is Coding Group',
        FcardImage:'coding.jpeg',
        FcardButton:'./joinPages/codingJoin.html',
        JcoverImage:'../media/codingCover.jpg',
        JcoverTitle:'Coding Club',
        JcoverDescription:'This is Description',
        changeFcardTitle: function(string){
            this.FcardTitle = string;
        },
        changeFcardDescription:function(string){
            this.FcardDescription = string;
        },
        changeJcoverImage:function(string){
            this.JcoverImage = string;
        },
        changeJcoverTitle:function(string){
            this.JcoverTitle = string;
        },
        changecoverDescription:function(string){
            this.JcoverDescription = string;
        }
    },
    {
        FcardTitle:'Cooking',
        FcardDescription:'This Is Cooking Group',
        FcardImage:'cooking.jpg',
        FcardButton:'./joinPages/cookingJoin.html',
        JcoverImage:'../media/cookingCover.jpg',
        JcoverTitle:'Cooking Club',
        JcoverDescription:'This is Description',
        changeFcardTitle: function(string){
            this.FcardTitle = string;
        },
        changeFcardDescription:function(string){
            this.FcardDescription = string;
        },
        changeJcoverImage:function(string){
            this.JcoverImage = string;
        },
        changeJcoverTitle:function(string){
            this.JcoverTitle = string;
        },
        changecoverDescription:function(string){
            this.JcoverDescription = string;
        }
    },
    {
        FcardTitle:'Arts',
        FcardDescription:'This Is Arts Group',
        FcardImage:'art.jpg',
        FcardButton:'./joinPages/artsJoin.html',
        JcoverImage:'../media/artsCover.jpg',
        JcoverTitle:'Arts Club',
        JcoverDescription:'This is Description',
        changeFcardTitle: function(string){
            this.FcardTitle = string;
        },
        changeFcardDescription:function(string){
            this.FcardDescription = string;
        },
        changeJcoverImage:function(string){
            this.JcoverImage = string;
        },
        changeJcoverTitle:function(string){
            this.JcoverTitle = string;
        },
        changecoverDescription:function(string){
            this.JcoverDescription = string;
        }
    },

]

var Heads=[
    {
        clubName:'Dance',
        headName:'abc',
        headEmail:'abc@gmail.com',
        username:'@dance',
        pass:'dance',

    },
    {
        clubName:'Music',
        headName:'abd',
        headEmail:'abd@gmail.com',
        username:'@music',
        pass:'music',
    },
    {
        clubName:'Coding',
        headName:'abe',
        headEmail:'abe@gmail.com',
        username:'@coding',
        pass:'coding',
    },
    {
        clubName:'Cooking',
        headName:'abf',
        headEmail:'abf@gmail.com',
        username:'@cooking',
        pass:'cooking',
    },
    {
        clubName:'Arts',
        headName:'abt',
        headEmail:'abt@gmail.com',
        username:'@arts',
        pass:'arts',
    }
]

var Students = [
    {
        usn:'1dt17cs45',
        studentName:'abc',
        phone:'324324',
        email:'abc@gmail.com',
        clubName:'coding'
    },
    {
        usn:'1dt17cs47',
        studentName:'gbc',
        phone:'324354324',
        email:'gbc@gmail.com',
        clubName:'coding'
    },
    {
        usn:'1dt17cs75',
        studentName:'agc',
        phone:'32324324',
        email:'agc@gmail.com',
        clubName:'music'
    },
    {
        usn:'1dt17cs70',
        studentName:'ayyc',
        phone:'324324354',
        email:'ayyc@gmail.com',
        clubName:'dance'
    },
    {
        usn:'1dt17cs32',
        studentName:'yybc',
        phone:'324323244',
        email:'yybc@gmail.com',
        clubName:'arts'
    },
]
//clubs API
var objToString=JSON.stringify(clubs);

localStorage.setItem('clubs',objToString);

//heads API
var headsToString = JSON.stringify(Heads);

localStorage.setItem('heads',headsToString);

//students API

var studentToString = JSON.stringify(Students);

localStorage.setItem('students',studentToString);
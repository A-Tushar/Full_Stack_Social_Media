const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const  {ObjectId} = mongoose.Schema;



const UserModel = new Schema(
    {
        first_name:{
            type:String,
            require:true,
            trim:true,
            text:true,
        },
        last_name:{
            type:String,
            require:true,
            trim:true,
            text:true,
        },
        user_name:{
            type:String,
            require:true,
            unique:true,
            trim:true,
            text:true,
        },
        email:{
            type:String,
            require:true,
            unique:true,
            trim:true,
            text:true,
        },
        password:{
            type:String,
            require:true,
            trim:true,
            text:true,
        },
        profile_pic:{
            type:String,
            default: ''
        },
        cover_pic:{
            type:String,
            default: ''
        },
        birth_day:{
            type:String,
            require:true,
        },
        birth_month:{
            type:String,
            require:true,
        },
        birth_year:{
            type:String,
            require:true,
        },
        gender:{
            type: String,
            require:true,
        },
        verify:{
            type:Boolean,
            default:false,
        },
        friends:[
            {
                type:ObjectId,
                ref:'userModel'
            }
        ],
        followers:[
            {
                type:ObjectId,
                ref:'userModel'
            }
        ],
        following:[
            {
                type:ObjectId,
                ref:'userModel'
            }
        ],
        request:[
            {
                type:ObjectId,
                ref:'userModel'
            }
        ],
        search:[
            {
                user:{
                    type:ObjectId,
                    ref:'userModel',
                    require:true,
                    text:true
                },
                createdAt:{
                    type:Date,
                    require:true
                }
            }
        ],
        details:{
            bio:{
                type:String
            },
            other_name:{
                type:String
            },
            job:{
                type:String
            },
            current_city:{
                type:String
            },
            workplace:{
                type:String
            },
            college:{
                type:String
            },
            highschool:{
                type:String
            },
            home_town:{
                type:String
            },
            relationship:{
                type:String,
                enum:[
                    'Single',
                    'In a relationship',
                    'Divorced',
                    "It's Compicated",
                    "Married"
                ]
            },
            other_social_connection:{
                type:String
            },
        },
        save_post:[
            {
                post:{
                    type:ObjectId,
                    ref:"post"
                },
                savedAt:{
                    type:Date,
                    require:true
                }
            }
        ]


    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('usermodel',UserModel);
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        member:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Member',
            required:[true,'Please link a member to this cart']
        },
        items:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Item'
        }]
    },
    {
        timestamps:true
    }
);

// attach model to default mongoose connection
module.exports = mongoose.model('Cart',CartSchema);
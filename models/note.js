const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    code: {
        type: Number,
        integer: true,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Apply TTL index to createdAt field
noteSchema.index({ createdAt: 1 }, { expireAfterSeconds: 1800 });

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;

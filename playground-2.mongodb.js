// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('FirstDB');

// Create a new document in the collection.
// Create a new document in the collection.
db.getCollection('Books').insertMany(
    [
        {
            "id": 1,
            "name": "Book 1",
            "publisher": "Publisher 1"
        },
        {
            "id": 2,
            "name": "Book 2",
            "publisher": "Publisher 2"
        },
        {
            "id": 3,
            "name": "Book 3",
            "publisher": "Publisher 3"
        },
        {
            "id": 4,
            "name": "Book 4",
            "publisher": "Publisher 4"
        }
    ]
);

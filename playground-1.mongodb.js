// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('FirstDB');

// Create a new document in the collection.
db.getCollection('Auther').insertMany(
    [
        {
            "id": 123456,
            "name": "John Doe",
            "birth": "1900"
        },
        {
            "id": 234567,
            "name": "Jane Smith",
            "birth": "1985"
        },
        {
            "id": 345678,
            "name": "Alice Johnson",
            "birth": "1978"
        },
        {
            "id": 456789,
            "name": "Bob Anderson",
            "birth": "1992"
        }
    ]

);

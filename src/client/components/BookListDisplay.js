import React, {Component} from "react";
import BookData from "../../datas/booklist.json";
import axios from "axios";

// console.log(books)

class BookListDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.getBooks();
    }

    getBooks = (next) => {
        axios
            .get("http://localhost/api/books")
            .then(res => {
                console.log(res.data);
                const books = res.data.map(book =>  book["_id"]);
                console.log(books);
                this.setState({
                    books: books,
                })
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="select">
                <h3>{"Liste de tous les livres"}</h3>
                <select className="inputtext">
                {this.state.books.map(book => {         

                return (<option key={book}>{book}</option>)})}
                    {/* {this.state.books.map(book=> {
                        <option> {book} </option>;
                    })} */}
                </select>
            </div>
        );
    }
}
export default BookListDisplay;

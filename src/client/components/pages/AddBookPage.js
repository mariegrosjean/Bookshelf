import React, {Component} from "react";

import "../../../styles/style.css";

import EnteteAddBook from "../entetes/EnteteAddBook";
import SubmitButton from "../Submitbutton";
import Navbar from "../navbar/Navbar";

class AddBookPage extends Component {
    constructor() {
        super();
        this.state = {
            booktitle: "",
            bookisbn: "",
            authorname: "",
            authorlastname: "",
            booklanguage: "",
            bookformat: "",
            bookowner: "",
            errors: {},
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value}, () => {
            console.log(this.state);
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            booktitle: this.state.booktitle,
            bookisbn: this.state.bookisbn,
            authorname: this.state.authorname,
            authorlastname: this.state.authorlastname,
            booklanguage: this.state.booklanguage,
            bookformat: this.state.bookformat,
            bookowner: this.state.bookowner,
        };

        console.log(userData);
    };

    render() {
        return (
            <div>
                <Navbar />
                <EnteteAddBook />
                <form className="addbookform" onSubmit={this.handleSubmit}>
                    <input
                        placeholder={"Titre du livre"}
                        type="text"
                        id="booktitle"
                        onChange={this.handleFullNameChange}
                        error={this.state.errors}
                    />
                    <input
                        placeholder={"Code isbn du livre"}
                        type="text"
                        id="bookisbn"
                        onChange={this.handleFullNameChange}
                        error={this.state.errors}
                    />
                    <input
                        placeholder={"Nom de l'auteur"}
                        type="text"
                        id="authorname"
                        onChange={this.handleFullNameChange}
                        error={this.state.errors}
                    />
                    <input
                        placeholder={"Prénom de l'auteur"}
                        type="text"
                        id="authorlastname"
                        onChange={this.handleFullNameChange}
                        error={this.state.errors}
                    />
                    <select
                        ref={select => (this.bookformat = select)}
                        name="bookformat">
                        <option value="french">{"Livre en français"}</option>
                        <option value="english">{"Livre en anglais"}</option>
                    </select>
                    <input
                        placeholder={"Propriétaire du livre"}
                        type="text"
                        id="bookowner"
                        onChange={this.handleFullNameChange}
                        error={this.state.errors}
                    />
                    <select
                        ref={select => (this.bookformat = select)}
                        name="bookformat">
                        <option value="paper">{"Papier"}</option>
                        <option value="numeric">{"Numérique"}</option>
                    </select>

                    <SubmitButton className="addbooksubmit" />
                </form>
            </div>
        );
    }
}
export default AddBookPage;

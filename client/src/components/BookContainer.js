import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import BookDetail from "./BookDetail";
import API from "../utils/API";

class BookContainer extends Component {
    state = {
        result: [],
        search: ""
    };

    // When this component mounts, search for the book "Harry Potter"
    componentDidMount() {
        this.searchBooks("The Mind Body Prescription");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => {
                this.setState(state => {
                    const result = [...res.data.items];
                    return {
                        result,
                        search: "",
                    };
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the Books API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };
    // When save button is clicked, create new MongoDB document
    handleSaveBooks = (id, event) => {
        event.preventDefault();
        console.log("Save Book Handler called!", id);
        const bookItem = this.state.result.filter(item => item.id === id);
        console.log("Test object", bookItem);
        API.saveBook({
            _id: id,
            title: bookItem[0].volumeInfo.title,
            authors: bookItem[0].volumeInfo.authors[0],
            description: bookItem[0].volumeInfo.description,
            image: bookItem[0].volumeInfo.imageLinks.thumbnail,
            link: bookItem[0].volumeInfo.infoLink
        })
            .then(res => res.json)
            .catch(err => console.log(err));
    };
    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-8">
                        {this.state.result.map(item =>
                            <Card
                                heading={item.volumeInfo.title || "Search for a Book to Begin"}
                                key={item.id}
                                id={item.id}
                                link={item.volumeInfo.infoLink}
                                saveBookHandler={this.handleSaveBooks}
                            >
                                {item.volumeInfo.title ? (
                                    <BookDetail
                                        title={item.volumeInfo.title}
                                        author={item.volumeInfo.authors[0]}
                                        description={item.volumeInfo.description}
                                        thumbnail={item.volumeInfo.imageLinks.thumbnail}
                                        link={item.volumeInfo.infoLink}
                                    />
                                ) : (
                                    <h3>No Results to Display</h3>
                                )}
                            </Card>
                        )}
                    </Col>
                    <Col size="md-4">
                        <Card heading="Search">
                            <SearchForm
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BookContainer;

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
        result: {},
        search: ""
    };

    // When this component mounts, search for the book "Harry Potter"
    componentDidMount() {
        this.searchBooks("The Mind Body Prescription");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data.items[0].volumeInfo }))
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

    render() {
        // console.log("RESULT:", this.state.result);
        // console.log(this.state.result.title);
        return (
            <Container>
                <Row>
                    <Col size="md-8">
                        <Card
                            heading={this.state.result.title || "Search for a Book to Begin"}
                        >
                            {this.state.result.title ? (
                                <BookDetail
                                    title={this.state.result.title}
                                    author={this.state.result.authors[0]}
                                    description={this.state.result.description}
                                    thumbnail={this.state.result.imageLinks.thumbnail}
                                    link={this.state.result.infoLink}
                                />
                            ) : (
                                <h3>No Results to Display</h3>
                            )}
                        </Card>
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

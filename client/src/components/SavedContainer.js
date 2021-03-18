import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import BookDetail from "./BookDetail";
import API from "../utils/API";

class SavedContainer extends Component {
    state = {
        savedBooks: [],
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                console.log("getBooks()");
                console.log(res.data);
                this.setState(state => {
                    const savedBooks = [...res.data];
                    return {
                        savedBooks
                    };
                })
            })
            .catch(err => console.log(err));
    };

    // When delete button is clicked, delete MongoDB document
    handleDeleteBooks = (id, event) => {
        event.preventDefault();
        console.log("Delete Book Handler called!", id);
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };
    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-8">
                        {this.state.savedBooks.map(book =>
                            <Card
                                heading={book.title}
                                key={book._id}
                                id={book._id}
                                link={book.link}
                                deleteBookHandler={this.handleDeleteBooks}
                            >
                                <BookDetail
                                    title={book.title}
                                    author={book.authors}
                                    description={book.description}
                                    thumbnail={book.image}
                                    link={book.link}
                                />
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SavedContainer;

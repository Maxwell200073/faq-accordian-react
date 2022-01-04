import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
    return (
        <main>
            <article className="container">
                <h3>Questions and answers about login</h3>
                <section>
                    {data.map((question) => {
                        return (
                            <SingleQuestion key={question.id} {...question} />
                        );
                    })}
                </section>
            </article>
        </main>
    );
}

export default App;

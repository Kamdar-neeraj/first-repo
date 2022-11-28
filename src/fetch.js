import React from "react";
export class RestAPIExample extends React.Component {
  constructor() {
    super();

    this.state = {
      tdata: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => res.json())

      .then((data) => {
        this.setState({ tdata: data });

        // console.log(this.state.tdata);
      })

      .catch(console.log);
  }

  render() {
    return (
      <div>
        <table border="1">
          <tbody>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Email</th>
              <th>body</th>
            </tr>
            {this.state.tdata.map((person) => (
              <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>

                <td>{person.email}</td>

                <td>{person.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

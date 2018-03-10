import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Navigation from '../Navigation';
import {Card, CardHeader} from 'material-ui/Card';

export default class TableExampleControlled extends Component {

  constructor(props) {
    super(props);
      this.state = {
        sortOn: "ID"
    };
  }

  Rows() {
    return(this.props.posts.map((post) => {
      return (
        <TableRow key={post.id}>
          <TableRowColumn width={1}>{post.id}</TableRowColumn>
          <TableRowColumn width={1}>{post.userId}</TableRowColumn>
          <TableRowColumn>{post.title}</TableRowColumn>
          <TableRowColumn>{post.body}</TableRowColumn>
        </TableRow>
      )
    }))
  }

  CallSort(data, type) {
    this.props.SortPosts(data, type);
    this.setState({
      sortOn:type
    })
  }

  render() {
    return (
      <div>
        <Navigation/>
        <Card>
          <CardHeader
            title={`Sorted On: ${this.state.sortOn}`}
          />
          <Table
            selectable={false}
            height={"500px"}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn width={1}>
                  {<div onClick={()=>this.CallSort(this.props.posts, "ID")}>ID</div>}
                </TableHeaderColumn>
                <TableHeaderColumn width={1}>
                  {<div onClick={()=>this.CallSort(this.props.posts, "User ID")}>User ID</div>}
                </TableHeaderColumn>
                <TableHeaderColumn>
                  {<div onClick={()=>this.CallSort(this.props.posts, "Title")}>Title</div>}
                </TableHeaderColumn>
                <TableHeaderColumn>
                  {<div onClick={()=>this.CallSort(this.props.posts, "Body")}>Body</div>}
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={false}
              stripedRows={true}
            >
              {this.Rows()}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './table.css';
export class table extends Component {
    render() {
        return (
            <div>
                <br />  <br />  <br />  <br />
                <div class="container">
                    <a href="#" class="btn btn-primary" id="add" ><b>+</b> Add new categories</a>
                    <div class="row col-md-12 ">

                        <table class="table table-striped custab">
                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Parent ID</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>1</td>
                                <td>News</td>
                                <td>News Cate</td>
                                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Products</td>
                                <td>Main Products</td>
                                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Blogs</td>
                                <td>Parent Blogs</td>
                                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default table

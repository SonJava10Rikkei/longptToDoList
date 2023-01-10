import React from "react";
import Item from "./Items";
import { useState } from "react";
export default function ListTaks(props) {
    const handleApp = (id) => {
        props.handleAppProps(id)
    }
    let listTasks = props.listTaskProps;
    let elementListItem = listTasks.map((task, index) => {
        return (
            <Item
                key={index}
                taskProps={task}
                onChangeStatus={props.onChangeStatus}
                handleListTaksProps={handleApp}
            />
        );
    });
    return (
        <>
            <ul id="myUL">{elementListItem}</ul>
        </>
    );
}
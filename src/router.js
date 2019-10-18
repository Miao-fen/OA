import React, { Component } from 'react'
import Login from "./pages/login/index";
import Admin from "./admin";
import Buttons from "./pages/content/ui/buttons";
import Modals from "./pages/content/ui/modals";
import Loadings from "./pages/content/ui/loadings";
import Notification from "./pages/content/ui/notifications";
import Message from "./pages/content/ui/messages";
import Tab from "./pages/content/ui/tabs";
import Carousels from "./pages/content/ui/carousel";
import Logins from "./pages/content/form/login";
import Register from "./pages/content/form/register";
import BasicTable from "./pages/content/table/basicTable";
import HighTable from "./pages/content/table/highTable";
import Rich from "./pages/content/rich/index";
import City from "./pages/content/city/index";
import Order from "./pages/content/order/index";
import Staff from "./pages/content/staff/index";
import Map from "./pages/content/map/index";
import Bar from "./pages/content/chart/bar";
import Pie from "./pages/content/chart/pie";
import Line from "./pages/content/chart/line";
import Permission from "./pages/content/permission/index";
import {HashRouter,Route} from "react-router-dom"
import "./index.css"

export default class router extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={()=>
                        <Admin>
                            <Route path="/ui/buttons" component={Buttons}></Route>
                            <Route path="/ui/modals" component={Modals}></Route>
                            <Route path="/ui/loadings" component={Loadings}></Route>
                            <Route path="/ui/notification" component={Notification}></Route>
                            <Route path="/ui/messages" component={Message}></Route>
                            <Route path="/ui/tabs" component={Tab}></Route>
                            <Route path="/ui/carousel" component={Carousels}></Route>
                            <Route path="/form/login" component={Logins}></Route>
                            <Route path="/form/reg" component={Register}></Route>
                            <Route path="/table/basic" component={BasicTable}></Route>
                            <Route path="/table/high" component={HighTable}></Route>
                            <Route path="/rich" component={Rich}></Route>
                            <Route path="/city" component={City}></Route>
                            <Route path="/order" component={Order}></Route>
                            <Route path="/user" component={Staff}></Route>
                            <Route path="/bikeMap" component={Map}></Route>
                            <Route path="/charts/bar" component={Bar}></Route>
                            <Route path="/charts/pie" component={Pie}></Route>
                            <Route path="/charts/line" component={Line}></Route>
                            <Route path="/permission" component={Permission}></Route>
                            <Route ></Route>
                        </Admin>
                    }></Route>
                </HashRouter>
            </div>
        )
    }
}

`
From componentDidMount

// this gives us access to the specific limb we want to add or take away from
// this.menuRef = database.ref('/menus')
//create a connection to root of db at root db.ref()
//*** need to use child_added here not value ***//
// this console log is everytime the db is changed it gives you the value
//this.setState is goingt o update the component to whatever is currently in db
// that was changed
// console.log("CHANGE: ", snapshot.val() );
//this needs to be tested against the value trying ****** to be sent for duplication
// console.log( snapshot.child('entree').exists() );
`

`
FROM APP constructor
//this variable needs to be change and set depending on what they would like to add or remove from the menu.interpolation on /menus that corresponds with button click.
    //  ************************ //
`

`
/* In react the pattern is to get the information at the top of 'state' and pass it down as needed*/
`

`
  Removed stringify the state of the database at the top of the page for now
  <code>{JSON.stringify(this.state.menuItems, null, 2)}</code>
`
`
handleAddItem(key) {
  const specific = this.props.itemName;
  // console.log(specific);
}
// handleAddItem(key) {
//   const user = this.props.user
//   database.ref(`/menus/desserts`)
//   .child(key)
//   .child('quantity')
//   .child(user.uid)
//   .set(user.displayName)
// }
// handleRemoveItem(key) {
//   const user = this.props.user
//   database.ref(`/menus/desserts`)
//   .child(key)
//   .child('quantity')
//   .child(user.uid)
//   .remove(user.displayName)
// }

handleChange( e ) {
  e.preventDefault();
  const newMenu = e.target.value;
  this.setState({ newMenu });
} //END OF HANDLE CHANGE

// selectMenu( e ) {
//   e.preventDefault();
//   this.menuRef = database.ref(`/menus`);
//   let node = 'desserts'
//   console.log(this.menuRef);
// }

handleSubmit( e ) {
  e.preventDefault();
  // ` string interpolation here to select which node we want to reference and change`
  //ALSO BRING CONLOG FROM ABOVE DOWN AND USE FOR VALIDATION
  // this.menuRef.child('/sides')
  let node = 'desserts';
  //which node to add or remove from
  this.menuRef.child(`/${node}`).push(this.state.newMenu)
  this.setState({ newMenu: '' });
} //END OF HANDLE SUBMIT
`

MAP FUNCTION FOR MenuItemDisplay
`

        <code>Map over INTERNALS </code>
        <br /> <br />

        {
          map(menuItems, (item, key) =>  {
            // console.log(menuItems);
            return (
              <MenuItemDisplay
                key={key}
                itemName={item}
                />
              )//end return
          } )
        }

`

` KEY NOTE!!!
  {/* //ternary with JUST ONE option */}
`
MAP FUNCTION FOR MenuDiv
`


{/* <AddToMenu menu={this.state.menuItems}  /> */}
`
`FOR RENDERING IN RIGHT sides

          { !currentUser && <SignIn />}

        {
        <div className="col-lg-8 right-box">
          <CurrentUser user={currentUser} />
          <br />  <br />

          <code>Map over these elements </code>
          {
            map(menuItems, (item, key) =>  {
            return (
              <MenuDiv
                key={key}
                itemName={key} />
              ) //end return
            })
          }

      </div>
        }
`








*********
need to refactor the amount of variables used inside the app constructor

EMAIL FALLS OUT OF BOX UPON SHRINKING SCREEN
react-bootstrap ACCORDIANS!

<div>
  {!!user.score && <li className="list-group-item"><h3>Score: {user.score}</h3></li>}
  <li className="list-group-item"> <img src={user.info.avatar_url} className="img-rounded img-responsive"/></li>
  {user.info.name && <li className="list-group-item">Name: {user.info.name}</li>}
  <li className="list-group-item">Username: {user.info.login}</li>
  {user.info.location && <li className="list-group-item">Location: {user.info.location}</li>}
  {user.info.company && <li className="list-group-item">Company: {user.info.company}</li>}
  <li className="list-group-item">Followers: {user.info.followers}</li>
  <li className="list-group-item">Following: {user.info.following}</li>
  <li className="list-group-item">Public Repos: {user.info.public_repos}</li>
  {user.info.blog && <li className="list-group-item">Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}
</div>






OLD MENU.div

class MenuDiv extends Component {
  constructor(props) {
    super(props);
    this.state ={
      qtyOrdered: 0
    };
    this.update = this.update.bind(this)
  };

  update( e ){
    this.setState({currentEvent: e.type})
  }

  seeMenuItems( e ) {
    console.log('clicked');
  }
  render() {
    console.log(this.state);
    const { itemName, seeMenuItems } = this.props;
    const panelNumber = 0;
    return (
      <div className="menuItem list-group-item">
        <div>
        {itemName}
        {/* <button
          onClick={this.seeMenuItems}
          onFocus={this.update}
          >See Category Items</button> */}
        </div>



      </div>
    )
  }
} //END OF MENUDIV COMPONENT

export default MenuDiv;


<code>Map over the MENU DIV</code>}
{/* {
  map(menu, (item, key) => {
    return (
      <MenuDiv
        ref={key}
        key={key}
        onClick={this.getMenuItems}
        categoryName={key} />
    ) //end return
  })
   */}

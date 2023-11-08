import './UpperNavBar.css'
function UpperNaveBar() {
    return (
        <>
            <div className="navBar">
                <div className='left'>
                    FREE SHIPPING ON ALL U.S ORDERS OVER $50
                </div>
                <div className='right'>
                    <ul>
                        <li>USD</li>
                        <li>English</li>
                        <li id='lastUl'>My Account</li>
                    </ul>

                </div>

            </div>
        </>
    )
}
export default UpperNaveBar;
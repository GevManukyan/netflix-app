import { fallDown as Burger } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styles from './style.module.css'
import { memo } from 'react';
import { CiSearch } from 'react-icons/ci';
const BurgerMenu =()=> {
    const CustomBurgerIcon = () => <img className={styles.burgerIcon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9kM00iTcm1fPfpGbIphKmlobMRkG2itJlf3im7H2qIQ&s" />;

    return (
        <div>
            <Burger isOpen={false} left customBurgerIcon={<CustomBurgerIcon />} >
                <div className={styles.burgerContainer}>
                    <Link to="" className={styles.link} >Home</Link>
                    <Link to="" className={styles.link}>TV Shows</Link>
                    <Link to="" className={styles.link}>Latest</Link>
                    <Link to="" className={styles.link}>My List</Link>
                    <Link to="" className={styles.link}>Browse by Language</Link>
                    <hr />
                    <div style={{display:"flex"}}>
                        <input type="text" className={styles.searchInput} placeholder='Search...'/>
                        <div className={styles.searchIcon}><CiSearch size={"30px"}  /></div>
                    </div>
                    
                </div>
            </Burger>
        </div>
    )
}
export default memo(BurgerMenu) 
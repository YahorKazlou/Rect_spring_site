import Input from '../common/Input';
import debounce from '../../utils/debounce';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
    const onChange = (value) => {
        debounce(onSearch, 300)(value);
    };

    return (
        <div className={styles.searchInput}>
            <Input onChange={onChange} type="text" placeholder="search..." />
        </div>
    );
};

export default SearchBar;

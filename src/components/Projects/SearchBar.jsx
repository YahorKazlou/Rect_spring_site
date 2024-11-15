import { Input } from '../common/input/Input';
import debounce from '../../utils/debounce';
import styles from './SearchBar.module.css';
import { state } from '../../App';

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

const oneF = () => {

};


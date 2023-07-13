import { menuItems } from '../constants';
import MenuCard from './MenuCard';

const Menuitems: React.FC = () => {
  return (
    <div>
      <ul className="list-none flex items-center justify-center gap-10 uppercase cursor-pointer text-sm">
        {menuItems.map((menuItem, index) => (
          <MenuCard key={index} menuItem={menuItem} />
        ))}
      </ul>
    </div>
  );
};

export default Menuitems;

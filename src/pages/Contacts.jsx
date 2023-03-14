import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

export default function Home() {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

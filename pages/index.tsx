import Card from '../components/common/Card';
import Button from '../components/common/Button';

const sampleCard = {
  title: 'Sample Property',
  description: 'A beautiful property in the city center.',
  image: '/assets/placeholder.jpg',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
      <div className="w-full max-w-sm mb-4">
        <Card {...sampleCard} />
      </div>
      <Button onClick={() => alert('Book Now!')}>Book Now</Button>
    </div>
  );
}

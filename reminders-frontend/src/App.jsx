import ReminderGrid from "./ReminderGrid";
import ReminderForm from "./ReminderForm";

function App() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen w-full font-mono">
        <div className="flex flex-row items-center gap-7 p-7 h-full">
          <ReminderForm />
          <ReminderGrid />
        </div>
      </div>
    </>
  );
}
export default App;

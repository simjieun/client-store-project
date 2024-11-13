import { useSetState, useTrackedState } from './store';

const EditPerson = () => {
  const setState = useSetState();
  const state = useTrackedState();
  const setFirstName = (e: { target: { value: any; }; }) => {
    const firstName = e.target.value;
    setState((prev) => ({ ...prev, firstName }));
  };
  const setLastName = (e: { target: { value: any; }; }) => {
    const lastName = e.target.value;
    setState((prev) => ({ ...prev, lastName }));
  };
  return (
    <div>
      <div>
        First Name:
        <input value={state.firstName || ''} onChange={setFirstName} />
      </div>
      <div>
        Last Name:
        <input value={state.lastName || ''} onChange={setLastName} />
      </div>
    </div>
  );
};

export default EditPerson;

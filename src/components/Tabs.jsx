export function Tabs(props) {
  //destructure todos from props
  const { todos, selectedTab, setSelectedTab } = props;
  const tabs = ["All", "Open", "Completed"];
  return (
    // calculate no. of tabs acc. to status & return the values
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;

        return (
          // elements need keys in reactjs map()
          <button
            // change the selected tab to tab
            onClick={() => {
              setSelectedTab(tab);
            }}
            key={tabIndex}
            className={
              // if the selected tab = tab give class tab-selected for css styling
              //"tab-button " space after className essential to give it another class
              "tab-button " + (tab === selectedTab ? "tab-selected" : " ")
            }
          >
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}

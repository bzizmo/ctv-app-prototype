import { createContext, useContext, useState, useRef, useEffect } from "react";

const FeatureModalContext = createContext();

export function FeatureModalProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({ title: "", message: "" });
  const okButtonRef = useRef();
  const lastFocusedRef = useRef(null);

  useEffect(() => {
    if (visible) {
      window.SpatialNavigation.pause();

      const timeout = setTimeout(() => {
        okButtonRef.current?.focus();
      }, 50);

      return () => {
        clearTimeout(timeout);
        window.SpatialNavigation.resume();
      };
    }
  }, [visible]);

  const showFeatureModal = (title, message) => {
    lastFocusedRef.current = document.activeElement;

    setModalData({ title, message });
    setVisible(true);
  };

  const hideFeatureModal = () => {
    setVisible(false);

    setTimeout(() => {
      lastFocusedRef.current?.focus();
    }, 50);
  };

  return (
    <FeatureModalContext.Provider value={{ showFeatureModal }}>
      {children}
      {visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white text-black p-6 rounded-xl w-[90%] max-w-md text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">{modalData.title}</h2>
            <p className="mb-6">{modalData.message}</p>
            <button
              ref={okButtonRef}
              tabIndex={0}
              onClick={hideFeatureModal}
              onKeyDown={(e) => {
                if (e.key === "Enter") hideFeatureModal();
              }}
              className="focusable bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </FeatureModalContext.Provider>
  );
}

export const useFeatureModal = () => useContext(FeatureModalContext);

import { useAppDispatch, useAppSelector } from "hooks";
import React, { useCallback } from "react";
import { changeLocalIndex } from "store/reducers/LocalHotels";

export default function LocalTap() {
  const dispatch = useAppDispatch();

  const { localIndex } = useAppSelector((state) => state.localHotels);
  const catalogs = useAppSelector((state) => state.catalog);
  const onSelectLocal = useCallback(
    (localIndex: number) => {
      dispatch(changeLocalIndex(localIndex));
    },
    [dispatch]
  );

  return (
    <div className="tab-text_pc">
      {catalogs.map((catalog, index) => {
        return (
          <React.Fragment key={catalog.city}>
            {index !== 0 && <div className="divider" />}
            <div className="item" onClick={() => onSelectLocal(index)}>
              <span className={`${index === localIndex && "active"} `}>
                {catalog.city}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

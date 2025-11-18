import React, { type JSX } from "react";

export interface TableColumn<T = any> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  render?: (value: any, item: T) => React.ReactNode;
  className?: string;
}

interface TableProps<T> {
  columns: Array<TableColumn<T>>;
  data: T[];
  renderRow?: (item: T, index: number) => React.ReactNode;
  onRowClick?: (item: T) => void;
  rowClassName?: string | ((item: T, index: number) => string);
}

function AttendanceTable<T>({
  columns,
  data = [],
  renderRow,
  onRowClick,
  rowClassName,
}: TableProps<T>): JSX.Element {
  const normalizedColumns = React.useMemo(() => columns, [columns]);

  const renderDefaultRow = React.useCallback(
    (item: T, rowIndex: number) => {
      const className =
        typeof rowClassName === "function"
          ? rowClassName(item, rowIndex)
          : rowClassName || "";

      return (
        <tr
          key={rowIndex}
          className={`bg-white rounded-md hover:bg-gray-50 ${
            onRowClick ? "cursor-pointer" : ""
          } ${className}`}
          onClick={() => onRowClick?.(item)}
        >
          {normalizedColumns.map((col, colIndex) => {
            let cellContent: React.ReactNode = null;

            try {
              const value =
                typeof col.accessor === "function"
                  ? col.accessor(item)
                  : item[col.accessor as keyof T];

              const renderedValue = col.render ? col.render(value, item) : value;

              cellContent = React.isValidElement(renderedValue)
                ? renderedValue
                : renderedValue !== undefined && renderedValue !== null
                ? String(renderedValue)
                : null;
            } catch {
              cellContent = null;
            }

            return (
              <td
                key={colIndex}
                className={`py-1 px-4 text-sm font-light text-black ${
                  col.className || ""
                }`}
              >
                {cellContent}
              </td>
            );
          })}
        </tr>
      );
    },
    [normalizedColumns, onRowClick, rowClassName]
  );

  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full px-4">
        {/* ✅ Use border-separate for equal gaps */}
        <table className="w-full border-separate border-spacing-x-8 border-spacing-y-1 table-auto">
          <thead>
            <tr className="border-b border-gray-200">
              {normalizedColumns.map((col, index) => (
                <th
                  key={index}
                  className={`py-3 px-4 text-left text-sm font-normal text-gray-400 whitespace-nowrap tracking-wider`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item, i) =>
                renderRow ? renderRow(item, i) : renderDefaultRow(item, i)
              )
            ) : (
              <tr>
                <td
                  colSpan={normalizedColumns.length}
                  className="px-4 py-4 text-center text-sm text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendanceTable;

import { useState } from 'react';
import { Button } from '../components/ui/button';
import {
  Folder,
  FileText,
  FileSpreadsheet,
  ChevronRight,
} from 'lucide-react';

const Dashboard = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  const toolsFolder = [
    {
      name: 'Documenten',
      type: 'folder',
      items: [
        { name: 'Handleiding.pdf', type: 'file' },
        { name: 'Overzicht.docx', type: 'file' },
      ],
    },
    {
      name: 'Excel Bestanden',
      type: 'folder',
      items: [
        { name: 'Financiën.xlsx', type: 'file' },
        { name: 'Begroting.xlsx', type: 'file' },
      ],
    },
  ];

  const handleFolderClick = (folderName: string) => {
    setOpenFolder(openFolder === folderName ? null : folderName);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="font-paradiso text-3xl md:text-5xl leading-[1.2] mb-8 text-text">
        Dashboard
      </h1>

      <div className="space-y-2">
        {toolsFolder.map((folder) => (
          <div key={folder.name} className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              onClick={() => handleFolderClick(folder.name)}
            >
              <ChevronRight
                className={`w-4 h-4 transition-transform ${openFolder === folder.name ? 'rotate-90' : ''}`}
              />
              <Folder className="w-4 h-4" />
              {folder.name}
            </Button>

            {openFolder === folder.name && (
              <div className="pl-8 space-y-1">
                {folder.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-text/80 hover:bg-background/50 rounded-md cursor-pointer"
                  >
                    {item.type === 'file' && (
                      <>
                        {item.name.endsWith('.xlsx') ? (
                          <FileSpreadsheet className="w-4 h-4" />
                        ) : (
                          <FileText className="w-4 h-4" />
                        )}
                        {item.name}
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

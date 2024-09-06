document.getElementById('upload').addEventListener('change', handleFile, false);

function handleFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const csv = XLSX.utils.sheet_to_csv(worksheet, { FS: ',', RS: '\n' });

        // Create a Blob from the CSV and download it
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.getElementById('download');
        a.href = url;
        a.download = 'converted_file.csv';
        a.style.display = 'block';
        a.click();
    };

    reader.readAsArrayBuffer(file);
}
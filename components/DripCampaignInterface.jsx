import React, { useState } from 'react';
import { Plus, Upload, Calendar, Clock, Users, Send, Pause, Play, Edit, Trash2, Settings, FileText, MapPin } from 'lucide-react';
import Papa from 'papaparse';

const DripCampaignInterface = () => {
    const [activeTab, setActiveTab] = useState('campaigns');
    const [campaigns, setCampaigns] = useState([
        {
            id: 1,
            title: 'Welcome Series',
            status: 'running',
            messages: 3,
            contacts: 245,
            created: '2025-07-15'
        },
        {
            id: 2,
            title: 'Product Launch',
            status: 'draft',
            messages: 2,
            contacts: 0,
            created: '2025-07-28'
        }
    ]);

    const [showCreateCampaign, setShowCreateCampaign] = useState(false);
    const [showUploadContacts, setShowUploadContacts] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    // Campaign form state
    const [campaignForm, setCampaignForm] = useState({
        title: '',
        status: 'draft',
        messages: [
            {
                text: '',
                attachment: null,
                sendType: 'instant',
                laterSameDayHour: '14',
                laterSameDayMinute: '00',
                laterDayNumber: '1',
                laterDayTime: '08:00',
                customDate: '07/30/2025',
                customTime: '08:00'
            }
        ]
    });

    // Contact upload form state
    const [uploadForm, setUploadForm] = useState({
        selectedCampaign: '',
        startType: 'now',
        startDate: '07/30/2025',
        startTime: '08:00',
        processNumber: '10',
        processInterval: '12',
        processUnit: 'hour',
        weekDays: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: false,
            sunday: false
        }
    });

    // File upload and mapping state
    const [fileData, setFileData] = useState(null);
    const [fileHeaders, setFileHeaders] = useState([]);
    const [fieldMapping, setFieldMapping] = useState({
        first_name: '',
        last_name: '',
        email: '',
        contact_number: '',
        state: '',
        city: '',
        address: '',
        drip_mode_active: ''
    });
    const [uploadStep, setUploadStep] = useState(1); // 1: upload, 2: mapping, 3: settings

    const addMessage = () => {
        if (campaignForm.messages.length < 3) {
            setCampaignForm({
                ...campaignForm,
                messages: [...campaignForm.messages, {
                    text: '',
                    attachment: null,
                    sendType: 'instant',
                    laterSameDayHour: '14',
                    laterSameDayMinute: '00',
                    laterDayNumber: '1',
                    laterDayTime: '08:00',
                    customDate: '07/30/2025',
                    customTime: '08:00'
                }]
            });
        }
    };

    const removeMessage = (index) => {
        const newMessages = campaignForm.messages.filter((_, i) => i !== index);
        setCampaignForm({ ...campaignForm, messages: newMessages });
    };

    const updateMessage = (index, field, value) => {
        const newMessages = [...campaignForm.messages];
        newMessages[index][field] = value;
        setCampaignForm({ ...campaignForm, messages: newMessages });
    };

    // File handling functions
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (fileExtension === 'csv') {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    if (results.data && results.data.length > 0) {
                        setFileData(results.data);
                        setFileHeaders(Object.keys(results.data[0]));
                        setUploadStep(2); // Move to mapping step

                        // Auto-map fields if headers match common patterns
                        autoMapFields(Object.keys(results.data[0]));
                    }
                },
                error: (error) => {
                    console.error('CSV parsing error:', error);
                    alert('Error parsing CSV file. Please check the file format.');
                }
            });
        } else if (fileExtension === 'txt') {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                // Assume tab or comma separated for txt files
                const lines = text.split('\n').filter(line => line.trim());
                if (lines.length > 0) {
                    const delimiter = text.includes('\t') ? '\t' : ',';
                    Papa.parse(text, {
                        header: true,
                        delimiter: delimiter,
                        skipEmptyLines: true,
                        complete: (results) => {
                            if (results.data && results.data.length > 0) {
                                setFileData(results.data);
                                setFileHeaders(Object.keys(results.data[0]));
                                setUploadStep(2);
                                autoMapFields(Object.keys(results.data[0]));
                            }
                        }
                    });
                }
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a CSV or TXT file.');
        }
    };

    const autoMapFields = (headers) => {
        const mapping = { ...fieldMapping };

        headers.forEach(header => {
            const lowerHeader = header.toLowerCase().trim();

            // Auto-map based on common field patterns
            if (lowerHeader.includes('first') && lowerHeader.includes('name')) {
                mapping.first_name = header;
            } else if (lowerHeader.includes('last') && lowerHeader.includes('name')) {
                mapping.last_name = header;
            } else if (lowerHeader.includes('email') || lowerHeader === 'email_address') {
                mapping.email = header;
            } else if (lowerHeader.includes('phone') || lowerHeader.includes('contact') || lowerHeader.includes('number')) {
                mapping.contact_number = header;
            } else if (lowerHeader === 'state' || lowerHeader.includes('state')) {
                mapping.state = header;
            } else if (lowerHeader === 'city' || lowerHeader.includes('city')) {
                mapping.city = header;
            } else if (lowerHeader.includes('address') || lowerHeader.includes('street')) {
                mapping.address = header;
            } else if (lowerHeader.includes('drip') && lowerHeader.includes('active')) {
                mapping.drip_mode_active = header;
            }
        });

        setFieldMapping(mapping);
    };

    const resetUpload = () => {
        setFileData(null);
        setFileHeaders([]);
        setFieldMapping({
            first_name: '',
            last_name: '',
            email: '',
            contact_number: '',
            state: '',
            city: '',
            address: '',
            drip_mode_active: ''
        });
        setUploadStep(1);
    };

    const renderSendTypeOptions = (message, index) => {
        switch (message.sendType) {
            case 'later-same-day':
                return (
                    <div className="flex gap-2 mt-2">
                        <select
                            value={message.laterSameDayHour}
                            onChange={(e) => updateMessage(index, 'laterSameDayHour', e.target.value)}
                            className="px-3 py-2 border rounded-lg"
                        >
                            {Array.from({length: 24}, (_, i) => (
                                <option key={i} value={i.toString().padStart(2, '0')}>
                                    {i.toString().padStart(2, '0')}
                                </option>
                            ))}
                        </select>
                        <span className="py-2">:</span>
                        <select
                            value={message.laterSameDayMinute}
                            onChange={(e) => updateMessage(index, 'laterSameDayMinute', e.target.value)}
                            className="px-3 py-2 border rounded-lg"
                        >
                            {['00', '15', '30', '45'].map(min => (
                                <option key={min} value={min}>{min}</option>
                            ))}
                        </select>
                    </div>
                );
            case 'later-day':
                return (
                    <div className="flex gap-4 mt-2 items-center">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium">Day:</label>
                            <input
                                type="number"
                                min="1"
                                max="500"
                                value={message.laterDayNumber}
                                onChange={(e) => updateMessage(index, 'laterDayNumber', e.target.value)}
                                className="w-20 px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium">Time:</label>
                            <input
                                type="time"
                                value={message.laterDayTime}
                                onChange={(e) => updateMessage(index, 'laterDayTime', e.target.value)}
                                className="px-3 py-2 border rounded-lg"
                            />
                        </div>
                    </div>
                );
            case 'custom-date':
                return (
                    <div className="flex gap-4 mt-2 items-center">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium">Date:</label>
                            <input
                                type="date"
                                value={message.customDate}
                                onChange={(e) => updateMessage(index, 'customDate', e.target.value)}
                                className="px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium">Time:</label>
                            <input
                                type="time"
                                value={message.customTime}
                                onChange={(e) => updateMessage(index, 'customTime', e.target.value)}
                                className="px-3 py-2 border rounded-lg"
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <h1 className="text-2xl font-bold text-gray-900">Drip Campaign Manager</h1>
                    <div className="flex gap-6 mt-4">
                        <button
                            onClick={() => setActiveTab('campaigns')}
                            className={`pb-2 border-b-2 ${activeTab === 'campaigns' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500'}`}
                        >
                            Campaigns
                        </button>
                        <button
                            onClick={() => setActiveTab('upload')}
                            className={`pb-2 border-b-2 ${activeTab === 'upload' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500'}`}
                        >
                            Upload Contacts
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-6">
                {activeTab === 'campaigns' && (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Drip Campaigns</h2>
                            <button
                                onClick={() => setShowCreateCampaign(true)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                            >
                                <Plus size={20} />
                                Create Campaign
                            </button>
                        </div>

                        <div className="grid gap-4">
                            {campaigns.map(campaign => (
                                <div key={campaign.id} className="bg-white rounded-lg shadow-sm border p-6">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-lg font-semibold">{campaign.title}</h3>
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                    campaign.status === 'running' ? 'bg-green-100 text-green-800' :
                                                        campaign.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                                            'bg-yellow-100 text-yellow-800'
                                                }`}>
                          {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                        </span>
                                            </div>
                                            <div className="flex gap-6 text-gray-600">
                        <span className="flex items-center gap-1">
                          <Send size={16} />
                            {campaign.messages} messages
                        </span>
                                                <span className="flex items-center gap-1">
                          <Users size={16} />
                                                    {campaign.contacts} contacts
                        </span>
                                                <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          Created {campaign.created}
                        </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                                                <Edit size={18} />
                                            </button>
                                            <button className="p-2 text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg">
                                                {campaign.status === 'running' ? <Pause size={18} /> : <Play size={18} />}
                                            </button>
                                            <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'upload' && (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Upload Contacts to Campaign</h2>
                            {fileData && (
                                <button
                                    onClick={resetUpload}
                                    className="text-gray-600 hover:text-red-600 flex items-center gap-2"
                                >
                                    <Trash2 size={18} />
                                    Reset Upload
                                </button>
                            )}
                        </div>

                        {/* Step Indicator */}
                        <div className="mb-6">
                            <div className="flex items-center justify-center space-x-4">
                                <div className={`flex items-center ${uploadStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${uploadStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                        1
                                    </div>
                                    <span className="ml-2">Upload File</span>
                                </div>
                                <div className={`w-16 h-1 ${uploadStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                                <div className={`flex items-center ${uploadStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${uploadStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                        2
                                    </div>
                                    <span className="ml-2">Map Fields</span>
                                </div>
                                <div className={`w-16 h-1 ${uploadStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                                <div className={`flex items-center ${uploadStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${uploadStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                        3
                                    </div>
                                    <span className="ml-2">Configure</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            {/* Step 1: File Upload */}
                            {uploadStep === 1 && (
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Upload CSV or TXT File
                                        </label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                                            <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                                            <p className="text-gray-600 mb-2">Drop your CSV or TXT file here or click to browse</p>
                                            <p className="text-sm text-gray-500 mb-4">Supported formats: .csv, .txt</p>
                                            <input
                                                type="file"
                                                accept=".csv,.txt"
                                                onChange={handleFileUpload}
                                                className="hidden"
                                                id="file-upload"
                                            />
                                            <label htmlFor="file-upload" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer inline-block">
                                                Choose File
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Field Mapping */}
                            {uploadStep === 2 && fileData && (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-lg font-semibold">Map Your Fields</h3>
                                            <p className="text-gray-600">Found {fileData.length} contacts. Map your CSV columns to the required fields.</p>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            <FileText className="inline mr-1" size={16} />
                                            {fileHeaders.length} columns detected
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {Object.entries(fieldMapping).map(([field, mappedHeader]) => (
                                            <div key={field}>
                                                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                                                    {field.replace('_', ' ')} {field === 'email' || field === 'contact_number' ? '*' : ''}
                                                </label>
                                                <select
                                                    value={mappedHeader}
                                                    onChange={(e) => setFieldMapping({...fieldMapping, [field]: e.target.value})}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                >
                                                    <option value="">Select a column...</option>
                                                    {fileHeaders.map(header => (
                                                        <option key={header} value={header}>{header}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Preview */}
                                    <div>
                                        <h4 className="text-md font-medium mb-3">Data Preview (First 3 rows)</h4>
                                        <div className="overflow-x-auto border rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    {Object.entries(fieldMapping).map(([field, mappedHeader]) => (
                                                        mappedHeader && (
                                                            <th key={field} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                {field.replace('_', ' ')}
                                                            </th>
                                                        )
                                                    ))}
                                                </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                {fileData.slice(0, 3).map((row, index) => (
                                                    <tr key={index}>
                                                        {Object.entries(fieldMapping).map(([field, mappedHeader]) => (
                                                            mappedHeader && (
                                                                <td key={field} className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                                    {row[mappedHeader] || '-'}
                                                                </td>
                                                            )
                                                        ))}
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <button
                                            onClick={() => setUploadStep(1)}
                                            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={() => setUploadStep(3)}
                                            disabled={!fieldMapping.email || !fieldMapping.contact_number}
                                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                                        >
                                            Continue to Settings
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Campaign Settings */}
                            {uploadStep === 3 && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Campaign Configuration</h3>
                                        <p className="text-gray-600">Configure how and when to process your {fileData?.length} contacts.</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Select Drip Campaign *
                                        </label>
                                        <select
                                            value={uploadForm.selectedCampaign}
                                            onChange={(e) => setUploadForm({...uploadForm, selectedCampaign: e.target.value})}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="">Choose a campaign...</option>
                                            {campaigns.map(campaign => (
                                                <option key={campaign.id} value={campaign.id}>{campaign.title}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Start Type
                                            </label>
                                            <div className="space-y-2">
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="startType"
                                                        value="now"
                                                        checked={uploadForm.startType === 'now'}
                                                        onChange={(e) => setUploadForm({...uploadForm, startType: e.target.value})}
                                                        className="mr-2"
                                                    />
                                                    Start Now
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="startType"
                                                        value="later"
                                                        checked={uploadForm.startType === 'later'}
                                                        onChange={(e) => setUploadForm({...uploadForm, startType: e.target.value})}
                                                        className="mr-2"
                                                    />
                                                    Start Later
                                                </label>
                                            </div>

                                            {uploadForm.startType === 'later' && (
                                                <div className="mt-3 flex gap-2">
                                                    <input
                                                        type="date"
                                                        value={uploadForm.startDate}
                                                        onChange={(e) => setUploadForm({...uploadForm, startDate: e.target.value})}
                                                        className="px-3 py-2 border rounded-lg"
                                                    />
                                                    <input
                                                        type="time"
                                                        value={uploadForm.startTime}
                                                        onChange={(e) => setUploadForm({...uploadForm, startTime: e.target.value})}
                                                        className="px-3 py-2 border rounded-lg"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Processing Settings
                                            </label>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm">Process</span>
                                                    <input
                                                        type="number"
                                                        value={uploadForm.processNumber}
                                                        onChange={(e) => setUploadForm({...uploadForm, processNumber: e.target.value})}
                                                        className="w-20 px-3 py-2 border rounded-lg"
                                                    />
                                                    <span className="text-sm">contacts every</span>
                                                    <input
                                                        type="number"
                                                        value={uploadForm.processInterval}
                                                        onChange={(e) => setUploadForm({...uploadForm, processInterval: e.target.value})}
                                                        className="w-20 px-3 py-2 border rounded-lg"
                                                    />
                                                    <select
                                                        value={uploadForm.processUnit}
                                                        onChange={(e) => setUploadForm({...uploadForm, processUnit: e.target.value})}
                                                        className="px-3 py-2 border rounded-lg"
                                                    >
                                                        <option value="min">Minutes</option>
                                                        <option value="hour">Hours</option>
                                                        <option value="day">Days</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Process on Following Days
                                        </label>
                                        <div className="grid grid-cols-7 gap-2">
                                            {Object.entries(uploadForm.weekDays).map(([day, checked]) => (
                                                <label key={day} className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-50">
                                                    <input
                                                        type="checkbox"
                                                        checked={checked}
                                                        onChange={(e) => setUploadForm({
                                                            ...uploadForm,
                                                            weekDays: {...uploadForm.weekDays, [day]: e.target.checked}
                                                        })}
                                                        className="mr-2"
                                                    />
                                                    <span className="text-sm capitalize">{day.slice(0, 3)}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <button
                                            onClick={() => setUploadStep(2)}
                                            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50"
                                        >
                                            Back to Mapping
                                        </button>
                                        <div className="flex gap-3">
                                            <button
                                                disabled={!uploadForm.selectedCampaign}
                                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                                            >
                                                Upload & Start Campaign
                                            </button>
                                            <button
                                                disabled={!uploadForm.selectedCampaign}
                                                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                            >
                                                Save as Draft
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Create Campaign Modal */}
            {showCreateCampaign && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b">
                            <h3 className="text-lg font-semibold">Create Drip Campaign</h3>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Campaign Title
                                    </label>
                                    <input
                                        type="text"
                                        value={campaignForm.title}
                                        onChange={(e) => setCampaignForm({...campaignForm, title: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter campaign title"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Status
                                    </label>
                                    <select
                                        value={campaignForm.status}
                                        onChange={(e) => setCampaignForm({...campaignForm, status: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="running">Running</option>
                                        <option value="pause">Paused</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-md font-medium">Messages (Max 3)</h4>
                                    {campaignForm.messages.length < 3 && (
                                        <button
                                            onClick={addMessage}
                                            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 flex items-center gap-1"
                                        >
                                            <Plus size={16} />
                                            Add Message
                                        </button>
                                    )}
                                </div>

                                {campaignForm.messages.map((message, index) => (
                                    <div key={index} className="border rounded-lg p-4 mb-4">
                                        <div className="flex justify-between items-center mb-3">
                                            <h5 className="font-medium">Message {index + 1}</h5>
                                            {campaignForm.messages.length > 1 && (
                                                <button
                                                    onClick={() => removeMessage(index)}
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            )}
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Message Text
                                                </label>
                                                <textarea
                                                    value={message.text}
                                                    onChange={(e) => updateMessage(index, 'text', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    rows="3"
                                                    placeholder="Enter your message text"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Attachment (MMS)
                                                </label>
                                                <input
                                                    type="file"
                                                    accept="image/*,video/*"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Send Type
                                                </label>
                                                <select
                                                    value={message.sendType}
                                                    onChange={(e) => updateMessage(index, 'sendType', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                >
                                                    <option value="instant">Send Instantly</option>
                                                    <option value="later-same-day">Later the Same Day</option>
                                                    <option value="later-day">On a Later Day</option>
                                                    <option value="custom-date">Custom Date</option>
                                                </select>

                                                {renderSendTypeOptions(message, index)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 border-t bg-gray-50 flex gap-3">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Create Campaign
                            </button>
                            <button
                                onClick={() => setShowCreateCampaign(false)}
                                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DripCampaignInterface;
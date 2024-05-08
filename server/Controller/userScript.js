import htmlScripts from "../Model/scriptSchema.js";

export const addScript = async (req, res) => {
    try {
        const { google_input, meta_input, microsoft_input } = req.body;
        
        console.log(req.body);
        
        if (!google_input || !meta_input || !microsoft_input) {
            return res.status(400).json({ message: 'Invalid input data' });
        }


        let existingScript = await htmlScripts.findOne();
        if (!existingScript) {
            existingScript = new htmlScripts();
        }
        
        // Update script properties
        existingScript.script.google_input = google_input;
        existingScript.script.meta_input = meta_input;
        existingScript.script.microsoft_input = microsoft_input;

        // Save the document
        const updatedScript = await existingScript.save();

        // Return success response
        return res.status(200).json({ message: 'Script data added/updated successfully', inputScript: updatedScript });
    } catch (error) {
        console.error('Error adding script:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

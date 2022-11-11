const { default: mongoose } = require("mongoose")


const jobModel = mongoose.model("job", mongoose.Schema({
    "id": { type: String, required: true },
    "url": { type: String, required: true },
    "job_title": { type: String, required: true },
    "category": { type: String, required: true },
    "company_name": { type: String, required: true },
    "city": [
        { type: String, required: true }
    ],
    "state": [
        { type: String, required: true }
    ],
    "country": [
        { type: String, required: true }
    ],
    "post_date": { type: String, required: true },
    "job_description": { type: String, required: true },
    "job_type": { type: String, required: true },
    "company_description": { type: String, required: true },
    "job_post_lang": { type: String, required: true },
    "html_job_description": { type: String, required: true },
    "is_remote": { type: String, required: true },
    "country_abbr": [
        { type: String, required: true }
    ],
    "predicted_language": { type: String, required: true },
    "inferred_iso3_lang_code": { type: String, required: true },
    "has_expired": { type: String, required: true },
    "latest_expiry_check_date": { type: String, required: true },
    "duplicate_status": { type: String, required: true },
    "job_desc_char_count": { type: Number, required: true }
})
)

module.exports = {
    jobModel
}


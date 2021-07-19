'use strict'

const express = require('express')
const fs = require('fs')

let language_en = JSON.parse(fs.readFileSync('public/language/en.json'))

function webui() {
	
	const theWebUI = {

		home_en: (req, res) => {
			res.render('home_en', {
				language: language_en
			})
		},

		about_us_en: (req, res) => {
			res.render('about_us_en', {
				language: language_en
			})
		},

		news_en: (req, res) => {
			res.render('news_en', {
				language: language_en
			})
		},

		sponsors_en: (req, res) => {
			res.render('sponsors_en', {
				language: language_en
			})
		},

		contacts_en: (req, res) => {
			res.render('contacts_en', {
				language: language_en
			})
		},

		privacy_policy_en: (req, res) => {
			res.render('privacy_policy_en', {
				language: language_en
			})
		}
		
	}

	const router = express.Router()
	router.use(express.urlencoded({ extended: true }))

	router.get('/en/', theWebUI.home_en)
	router.get('/en/about_us', theWebUI.about_us_en)
	router.get('/en/news', theWebUI.news_en)
	router.get('/en/sponsors', theWebUI.sponsors_en)
	router.get('/en/contacts', theWebUI.contacts_en)
	router.get('/en/privacy_policy', theWebUI.privacy_policy_en)

	return router;
}

module.exports = webui
// AI Prompt Optimizer - Modern JavaScript with Enhanced UI/UX
// Enhanced with accessibility, animations, and modern features

class AIPromptOptimizerModern {
    constructor() {
        this.currentStep = 0;
        this.answers = {};
        this.aiPlatforms = this.initializeAIPlatforms();
        this.questions = this.initializeQuestions();
        this.theme = localStorage.getItem('theme') || 'light';
        this.animationsEnabled = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        this.init();
    }

    initializeAIPlatforms() {
        return {
            'chatgpt': {
                name: 'ChatGPT (OpenAI)',
                icon: 'fas fa-comments',
                description: 'Most popular conversational AI',
                tips: [
                    'Be specific and detailed in your requests',
                    'Use clear role definitions (e.g., "You are an expert...")',
                    'Break complex tasks into smaller steps',
                    'Provide context and examples when possible',
                    'Use structured formatting for better responses',
                    'Ask for step-by-step explanations when needed'
                ],
                bestPractices: {
                    roleDefinition: 'Always start with a clear role definition',
                    context: 'Provide relevant background information',
                    examples: 'Include specific examples when possible',
                    format: 'Specify the desired output format',
                    constraints: 'Mention any limitations or requirements'
                }
            },
            'claude': {
                name: 'Claude (Anthropic)',
                icon: 'fas fa-brain',
                description: 'Advanced reasoning and analysis',
                tips: [
                    'Claude excels at complex reasoning tasks',
                    'Be explicit about your thought process requirements',
                    'Use structured prompts with clear sections',
                    'Ask for detailed explanations and justifications',
                    'Leverage Claude\'s strength in analysis and synthesis',
                    'Provide clear success criteria for your task'
                ],
                bestPractices: {
                    roleDefinition: 'Define the expert role clearly',
                    reasoning: 'Ask for step-by-step reasoning',
                    analysis: 'Request detailed analysis and insights',
                    examples: 'Provide concrete examples and use cases',
                    verification: 'Ask for verification of key points'
                }
            },
            'gemini': {
                name: 'Gemini (Google)',
                icon: 'fas fa-gem',
                description: 'Multimodal AI with strong reasoning',
                tips: [
                    'Gemini works well with multimodal inputs',
                    'Be specific about the type of analysis needed',
                    'Use clear, structured prompts',
                    'Leverage its strength in research and fact-checking',
                    'Ask for multiple perspectives on complex topics',
                    'Request citations and sources when relevant'
                ],
                bestPractices: {
                    roleDefinition: 'Clearly define the expert role',
                    research: 'Ask for research-backed responses',
                    sources: 'Request citations and references',
                    analysis: 'Specify the depth of analysis needed',
                    verification: 'Ask for fact-checking and verification'
                }
            },
            'copilot': {
                name: 'GitHub Copilot',
                icon: 'fas fa-code',
                description: 'AI pair programmer for developers',
                tips: [
                    'Be specific about programming language and framework',
                    'Provide context about your codebase and architecture',
                    'Use clear comments to guide the AI',
                    'Break down complex functions into smaller parts',
                    'Specify coding standards and conventions',
                    'Ask for explanations of generated code'
                ],
                bestPractices: {
                    language: 'Specify programming language clearly',
                    context: 'Provide relevant code context',
                    standards: 'Mention coding standards and conventions',
                    testing: 'Ask for test cases and validation',
                    documentation: 'Request inline documentation'
                }
            },
            'copilot-x': {
                name: 'GitHub Copilot X',
                icon: 'fas fa-code-branch',
                description: 'Advanced AI coding assistant',
                tips: [
                    'Use natural language to describe complex requirements',
                    'Provide architectural context and patterns',
                    'Ask for code reviews and improvements',
                    'Request explanations of complex algorithms',
                    'Specify performance and security requirements',
                    'Ask for alternative implementations'
                ],
                bestPractices: {
                    architecture: 'Describe system architecture clearly',
                    patterns: 'Specify design patterns to use',
                    performance: 'Mention performance requirements',
                    security: 'Include security considerations',
                    testing: 'Request comprehensive test coverage'
                }
            },
            'cursor': {
                name: 'Cursor AI',
                icon: 'fas fa-mouse-pointer',
                description: 'AI-powered code editor',
                tips: [
                    'Use natural language for code generation',
                    'Provide clear context about your project',
                    'Ask for refactoring suggestions',
                    'Request code optimization and improvements',
                    'Specify coding patterns and conventions',
                    'Ask for debugging help with specific errors'
                ],
                bestPractices: {
                    context: 'Provide comprehensive project context',
                    patterns: 'Specify coding patterns and conventions',
                    optimization: 'Ask for performance optimizations',
                    debugging: 'Provide specific error messages',
                    refactoring: 'Request clean, maintainable code'
                }
            },
            'perplexity': {
                name: 'Perplexity AI',
                icon: 'fas fa-search',
                description: 'Research-focused AI with citations',
                tips: [
                    'Ask research-oriented questions',
                    'Request specific sources and citations',
                    'Use current events and recent information',
                    'Ask for multiple perspectives on topics',
                    'Request fact-checking and verification',
                    'Specify the depth of research needed'
                ],
                bestPractices: {
                    research: 'Frame questions as research queries',
                    sources: 'Ask for credible sources and citations',
                    current: 'Request up-to-date information',
                    verification: 'Ask for fact-checking and verification',
                    perspectives: 'Request multiple viewpoints'
                }
            },
            'bard': {
                name: 'Bard (Google)',
                icon: 'fas fa-robot',
                description: 'Google\'s conversational AI',
                tips: [
                    'Be conversational and natural in your prompts',
                    'Ask follow-up questions for clarification',
                    'Request creative and innovative solutions',
                    'Use Bard\'s strength in creative writing',
                    'Ask for multiple options and alternatives',
                    'Request explanations in simple terms'
                ],
                bestPractices: {
                    conversation: 'Use natural, conversational language',
                    creativity: 'Leverage creative problem-solving',
                    alternatives: 'Ask for multiple solution options',
                    simplicity: 'Request explanations in simple terms',
                    followup: 'Plan for follow-up questions'
                }
            },
            'servicenow': {
                name: 'ServiceNow AI',
                icon: 'fas fa-cogs',
                description: 'Enterprise AI for ServiceNow platform',
                tips: [
                    'Be specific about ServiceNow modules and tables',
                    'Include relevant business context and requirements',
                    'Specify security and compliance requirements',
                    'Ask for best practices and governance',
                    'Request code that follows ServiceNow standards',
                    'Include performance and scalability considerations'
                ],
                bestPractices: {
                    modules: 'Specify ServiceNow modules and tables',
                    business: 'Include business context and requirements',
                    security: 'Mention security and compliance needs',
                    governance: 'Ask for governance best practices',
                    performance: 'Consider performance and scalability',
                    standards: 'Follow ServiceNow coding standards'
                }
            }
        };
    }

    initializeQuestions() {
        return [
            {
                id: 'ai_platform',
                title: 'Which AI platform are you using?',
                description: 'Select the AI platform you want to optimize your prompt for. Each platform has unique strengths and best practices.',
                type: 'radio',
                options: Object.keys(this.aiPlatforms).map(key => ({
                    value: key,
                    label: this.aiPlatforms[key].name,
                    description: this.aiPlatforms[key].description,
                    icon: this.aiPlatforms[key].icon
                }))
            },
            {
                id: 'task_type',
                title: 'What type of task are you working on?',
                description: 'Understanding your task type helps us optimize the prompt structure and approach.',
                type: 'radio',
                options: [
                    { value: 'coding', label: 'Coding & Development', description: 'Writing, debugging, or reviewing code' },
                    { value: 'analysis', label: 'Data Analysis & Research', description: 'Analyzing data, research, or information' },
                    { value: 'creative', label: 'Creative Writing', description: 'Content creation, storytelling, or creative tasks' },
                    { value: 'business', label: 'Business & Strategy', description: 'Business analysis, planning, or strategy' },
                    { value: 'learning', label: 'Learning & Education', description: 'Explaining concepts, tutoring, or teaching' },
                    { value: 'problem_solving', label: 'Problem Solving', description: 'Troubleshooting, optimization, or complex problem solving' },
                    { value: 'other', label: 'Other', description: 'Specify your task type' }
                ]
            },
            {
                id: 'complexity',
                title: 'How complex is your task?',
                description: 'The complexity level helps determine the level of detail needed in your prompt.',
                type: 'radio',
                options: [
                    { value: 'simple', label: 'Simple', description: 'Straightforward task with clear requirements' },
                    { value: 'moderate', label: 'Moderate', description: 'Some complexity, may require multiple steps' },
                    { value: 'complex', label: 'Complex', description: 'Highly complex, requires detailed planning and execution' },
                    { value: 'expert', label: 'Expert Level', description: 'Advanced task requiring deep expertise and analysis' }
                ]
            },
            {
                id: 'output_format',
                title: 'What format do you want for the output?',
                description: 'Specifying the desired output format helps the AI provide more useful results.',
                type: 'checkbox',
                options: [
                    { value: 'step_by_step', label: 'Step-by-step instructions', description: 'Detailed, sequential guidance' },
                    { value: 'code_examples', label: 'Code examples', description: 'Working code samples and snippets' },
                    { value: 'explanations', label: 'Detailed explanations', description: 'In-depth explanations and reasoning' },
                    { value: 'bullet_points', label: 'Bullet points', description: 'Concise, organized bullet points' },
                    { value: 'structured_data', label: 'Structured data', description: 'Tables, lists, or organized data' },
                    { value: 'creative_format', label: 'Creative format', description: 'Story, dialogue, or creative presentation' }
                ]
            },
            {
                id: 'context_details',
                title: 'What context should the AI know about?',
                description: 'Select the types of context you want to provide. We\'ll ask specific questions for each selected option.',
                type: 'checkbox',
                options: [
                    { value: 'experience_level', label: 'Your experience level', description: 'Beginner, intermediate, or expert' },
                    { value: 'project_context', label: 'Project context', description: 'Background about your project or work' },
                    { value: 'constraints', label: 'Constraints and limitations', description: 'Time, budget, or technical constraints' },
                    { value: 'preferences', label: 'Style preferences', description: 'Communication style or approach preferences' },
                    { value: 'target_audience', label: 'Target audience', description: 'Who will use or see the output' },
                    { value: 'success_criteria', label: 'Success criteria', description: 'How you\'ll measure success' }
                ]
            }
        ];
    }

    init() {
        this.setupTheme();
        this.setupEventListeners();
        this.renderQuestion();
        this.updateProgress();
        this.setupAccessibility();
        this.setupAnimations();
        
        // Show loading indicator briefly for smooth experience
        this.showLoading();
        setTimeout(() => {
            this.hideLoading();
        }, 500);
    }

    setupTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    setupEventListeners() {
        // Navigation buttons
        document.getElementById('nextBtn').addEventListener('click', () => this.nextStep());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevStep());
        document.getElementById('generateBtn').addEventListener('click', () => this.generatePrompt());
        document.getElementById('copyBtn').addEventListener('click', () => this.copyPrompt());
        
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Start new prompt button with event delegation
        document.addEventListener('click', (event) => {
            if (event.target && event.target.id === 'newPromptBtn') {
                event.preventDefault();
                event.stopPropagation();
                this.startNewPrompt();
            }
        });
        
        // Also try direct attachment if button exists
        const newPromptBtn = document.getElementById('newPromptBtn');
        if (newPromptBtn) {
            newPromptBtn.addEventListener('click', (event) => {
                console.log('Start New Prompt button clicked (direct listener)');
                event.preventDefault();
                event.stopPropagation();
                this.startNewPrompt();
            });
            console.log('Start New Prompt button event listener attached (direct)');
        } else {
            console.log('Start New Prompt button not found initially (will use event delegation)');
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (event) => {
            this.handleKeyboardNavigation(event);
        });
        
        // Window resize handler
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    setupAccessibility() {
        // Add ARIA labels and roles
        const progressBar = document.querySelector('.progress-container');
        if (progressBar) {
            progressBar.setAttribute('role', 'progressbar');
            progressBar.setAttribute('aria-valuenow', this.currentStep + 1);
            progressBar.setAttribute('aria-valuemin', '1');
            progressBar.setAttribute('aria-valuemax', this.questions.length);
        }
    }

    setupAnimations() {
        if (!this.animationsEnabled) {
            document.documentElement.style.setProperty('--transition-fast', '0ms');
            document.documentElement.style.setProperty('--transition-normal', '0ms');
            document.documentElement.style.setProperty('--transition-slow', '0ms');
        }
    }

    handleKeyboardNavigation(event) {
        // Escape key to go back
        if (event.key === 'Escape' && this.currentStep > 0) {
            this.prevStep();
        }
        
        // Enter key to go forward (if not in textarea)
        if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
            event.preventDefault();
            if (this.currentStep < this.questions.length - 1) {
                this.nextStep();
            } else {
                this.generatePrompt();
            }
        }
        
        // Arrow keys for radio buttons
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            const radioButtons = document.querySelectorAll('input[type="radio"]:not(:disabled)');
            if (radioButtons.length > 0) {
                event.preventDefault();
                const currentIndex = Array.from(radioButtons).indexOf(document.activeElement);
                let nextIndex;
                
                if (event.key === 'ArrowDown') {
                    nextIndex = (currentIndex + 1) % radioButtons.length;
                } else {
                    nextIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
                }
                
                radioButtons[nextIndex].focus();
                radioButtons[nextIndex].click();
            }
        }
    }

    handleResize() {
        // Handle responsive adjustments
        const container = document.querySelector('.container');
        if (container) {
            // Add any responsive adjustments here
        }
    }

    showLoading() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'flex';
        }
    }

    hideLoading() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    }

    showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'polite');
        
        toastContainer.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.classList.add('toast-show');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('toast-show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
        
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        
        this.showToast(`Switched to ${this.theme} mode`, 'success');
    }

    renderQuestion() {
        const container = document.getElementById('questionContainer');
        const question = this.questions[this.currentStep];
        
        if (!question) return;
        
        container.innerHTML = `
            <div class="question-title">${question.title}</div>
            <div class="question-description">${question.description}</div>
            <div class="form-group">
                ${this.renderQuestionInput(question)}
            </div>
        `;

        this.setupQuestionEventListeners(question);
        this.animateQuestionIn();
    }

    renderQuestionInput(question) {
        switch (question.type) {
            case 'radio':
                return `
                    <div class="radio-group" role="radiogroup" aria-labelledby="question-title">
                        ${question.options.map((option, index) => `
                            <div class="radio-item" data-value="${option.value}" tabindex="0">
                                <input 
                                    type="radio" 
                                    name="${question.id}" 
                                    value="${option.value}" 
                                    id="${question.id}_${option.value}"
                                    ${this.answers[question.id] === option.value ? 'checked' : ''}
                                >
                                <label for="${question.id}_${option.value}">
                                    <strong>${option.label}</strong>
                                    <br><small>${option.description}</small>
                                </label>
                            </div>
                        `).join('')}
                    </div>
                `;
            case 'checkbox':
                return `
                    <div class="checkbox-group" role="group" aria-labelledby="question-title">
                        ${question.options.map(option => `
                            <div class="checkbox-item" data-value="${option.value}" tabindex="0">
                                <input 
                                    type="checkbox" 
                                    name="${question.id}" 
                                    value="${option.value}" 
                                    id="${question.id}_${option.value}"
                                    ${(this.answers[question.id] || []).includes(option.value) ? 'checked' : ''}
                                >
                                <label for="${question.id}_${option.value}">
                                    <strong>${option.label}</strong>
                                    <br><small>${option.description}</small>
                                </label>
                            </div>
                        `).join('')}
                    </div>
                `;
            case 'textarea':
                return `
                    <textarea 
                        id="${question.id}" 
                        placeholder="${question.placeholder || ''}"
                        rows="4"
                        aria-describedby="question-description"
                    >${this.answers[question.id] || ''}</textarea>
                `;
            default:
                return '';
        }
    }

    setupQuestionEventListeners(question) {
        if (question.type === 'radio') {
            document.querySelectorAll(`input[name="${question.id}"]`).forEach(input => {
                input.addEventListener('change', (e) => {
                    this.answers[question.id] = e.target.value;
                    this.updateRadioSelection(question.id, e.target.value);
                    this.animateSelection(e.target);
                });
            });
            
            // Add click handlers for the container divs
            document.querySelectorAll(`[data-value]`).forEach(item => {
                item.addEventListener('click', (e) => {
                    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL') {
                        const input = item.querySelector('input');
                        if (input) {
                            input.checked = true;
                            input.dispatchEvent(new Event('change'));
                        }
                    }
                });
                
                item.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const input = item.querySelector('input');
                        if (input) {
                            input.checked = true;
                            input.dispatchEvent(new Event('change'));
                        }
                    }
                });
            });
        } else if (question.type === 'checkbox') {
            document.querySelectorAll(`input[name="${question.id}"]`).forEach(input => {
                input.addEventListener('change', (e) => {
                    this.updateCheckboxAnswers(question.id, e.target.value, e.target.checked);
                    this.animateSelection(e.target);
                });
            });
            
            // Add click handlers for the container divs
            document.querySelectorAll(`[data-value]`).forEach(item => {
                item.addEventListener('click', (e) => {
                    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL') {
                        const input = item.querySelector('input');
                        if (input) {
                            input.checked = !input.checked;
                            input.dispatchEvent(new Event('change'));
                        }
                    }
                });
            });
        } else if (question.type === 'textarea') {
            document.getElementById(question.id).addEventListener('input', (e) => {
                this.answers[question.id] = e.target.value;
            });
        }
    }

    animateQuestionIn() {
        const container = document.getElementById('questionContainer');
        if (container && this.animationsEnabled) {
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            
            requestAnimationFrame(() => {
                container.style.transition = 'all 0.6s ease-out';
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            });
        }
    }

    animateSelection(element) {
        if (this.animationsEnabled) {
            element.closest('.radio-item, .checkbox-item').style.transform = 'scale(1.05)';
            setTimeout(() => {
                element.closest('.radio-item, .checkbox-item').style.transform = 'scale(1)';
            }, 150);
        }
    }

    updateRadioSelection(questionId, value) {
        document.querySelectorAll(`[data-value]`).forEach(item => {
            item.classList.remove('selected');
        });
        document.querySelector(`[data-value="${value}"]`).classList.add('selected');
    }

    updateCheckboxAnswers(questionId, value, checked) {
        if (!this.answers[questionId]) {
            this.answers[questionId] = [];
        }
        
        if (checked) {
            if (!this.answers[questionId].includes(value)) {
                this.answers[questionId].push(value);
            }
        } else {
            this.answers[questionId] = this.answers[questionId].filter(v => v !== value);
        }
        
        document.querySelector(`[data-value="${value}"]`).classList.toggle('selected', checked);
    }

    nextStep() {
        if (this.validateCurrentStep()) {
            if (this.questions[this.currentStep].id === 'context_details') {
                this.currentStep++;
                this.addDynamicContextQuestions();
                return;
            }
            
            this.currentStep++;
            
            if (this.currentStep < this.questions.length) {
                this.renderQuestion();
                this.updateProgress();
                this.updateNavigation();
            } else {
                this.showGenerateButton();
            }
        }
    }

    prevStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            
            if (this.questions[this.currentStep].id === 'context_details') {
                this.rebuildDynamicContextQuestions();
            }
            
            this.renderQuestion();
            this.updateProgress();
            this.updateNavigation();
        }
    }

    validateCurrentStep() {
        const question = this.questions[this.currentStep];
        const answer = this.answers[question.id];
        
        if (!answer || 
            (Array.isArray(answer) && answer.length === 0) ||
            (typeof answer === 'string' && answer.trim() === '')) {
            this.showToast(`Please answer the question: ${question.title}`, 'error');
            return false;
        }
        
        return true;
    }

    updateProgress() {
        const totalQuestions = this.questions.length;
        const currentStepNumber = this.currentStep + 1;
        const progress = (currentStepNumber / totalQuestions) * 100;
        
        document.getElementById('progressFill').style.width = `${Math.min(progress, 100)}%`;
        document.getElementById('progressText').textContent = `Step ${currentStepNumber} of ${totalQuestions}`;
        
        // Update ARIA attributes
        const progressBar = document.querySelector('.progress-container');
        if (progressBar) {
            progressBar.setAttribute('aria-valuenow', currentStepNumber);
        }
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const generateBtn = document.getElementById('generateBtn');
        
        prevBtn.style.display = this.currentStep > 0 ? 'flex' : 'none';
        
        if (this.currentStep < this.questions.length - 1 || this.questions[this.currentStep].id === 'context_details') {
            nextBtn.style.display = 'flex';
            generateBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'none';
            generateBtn.style.display = 'flex';
        }
    }

    showGenerateButton() {
        document.getElementById('questionContainer').innerHTML = `
            <div class="question-title">Ready to Generate Your Prompt!</div>
            <div class="question-description">
                You've completed all the questions. Click the button below to generate your optimized prompt for ${this.aiPlatforms[this.answers.ai_platform]?.name || 'your chosen AI platform'}.
            </div>
        `;
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('generateBtn').style.display = 'flex';
        document.getElementById('prevBtn').style.display = 'flex';
    }

    generatePrompt() {
        this.showLoading();
        
        setTimeout(() => {
            const aiPlatform = this.answers.ai_platform;
            const aiInfo = this.aiPlatforms[aiPlatform];
            
            const prompt = this.buildOptimizedPrompt(aiPlatform, aiInfo);
            
            document.getElementById('generatedPrompt').value = prompt;
            document.getElementById('resultContainer').style.display = 'block';
            
            const questionContainer = document.getElementById('questionContainer');
            const navigation = document.getElementById('navigation');
            
            if (questionContainer) {
                questionContainer.style.display = 'none';
            }
            if (navigation) {
                navigation.style.display = 'none';
            }
            
            this.showAITips(aiInfo);
            this.hideLoading();
            
            // Scroll to result with smooth animation
            document.getElementById('resultContainer').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            this.showToast('Prompt generated successfully!', 'success');
        }, 1000);
    }

    buildOptimizedPrompt(aiPlatform, aiInfo) {
        const taskType = this.answers.task_type;
        const complexity = this.answers.complexity;
        const outputFormats = this.answers.output_format || [];
        const extraPreferences = this.answers.extra_preferences || '';
        
        let prompt = '';
        
        prompt += this.getRoleDefinition(aiPlatform, taskType, complexity);
        prompt += this.getTaskDescription(taskType, complexity);
        prompt += this.getContextSection([], extraPreferences);
        prompt += this.getOutputFormatSection(outputFormats);
        prompt += this.getAISpecificOptimizations(aiPlatform, aiInfo);
        prompt += this.getClosingInstructions(aiPlatform);
        
        return prompt.trim();
    }

    getRoleDefinition(aiPlatform, taskType, complexity) {
        const roleMap = {
            'coding': 'expert software developer',
            'analysis': 'data analyst and research expert',
            'creative': 'creative writing specialist',
            'business': 'business strategy consultant',
            'learning': 'educational expert and tutor',
            'problem_solving': 'problem-solving specialist',
            'other': 'expert in the relevant field'
        };
        
        const complexityMap = {
            'simple': 'experienced',
            'moderate': 'highly experienced',
            'complex': 'expert-level',
            'expert': 'world-class expert'
        };
        
        const role = roleMap[taskType] || 'expert';
        const level = complexityMap[complexity] || 'experienced';
        
        return `You are a ${level} ${role} with deep expertise in your field. `;
    }

    getTaskDescription(taskType, complexity) {
        const complexityDescriptions = {
            'simple': 'Please provide a clear, straightforward solution',
            'moderate': 'Please provide a detailed solution with multiple considerations',
            'complex': 'Please provide a comprehensive solution with thorough analysis',
            'expert': 'Please provide an expert-level solution with deep insights and advanced techniques'
        };
        
        return `Your task is to help with a ${taskType} problem. ${complexityDescriptions[complexity] || complexityDescriptions['moderate']}. `;
    }

    getContextSection(contextDetails, extraPreferences) {
        let context = '';
        
        if (this.answers.context_experience_level) {
            const experienceLevel = this.answers.context_experience_level;
            const experienceMap = {
                'beginner': 'tailor your response for a beginner level with clear, basic explanations',
                'intermediate': 'tailor your response for an intermediate level with moderate complexity',
                'advanced': 'tailor your response for an advanced level with sophisticated concepts',
                'expert': 'tailor your response for an expert level with deep, technical insights'
            };
            context += `Please ${experienceMap[experienceLevel] || experienceMap['intermediate']}. `;
        }
        
        if (this.answers.context_project_context) {
            context += `Project context: ${this.answers.context_project_context}. `;
        }
        
        if (this.answers.context_constraints) {
            context += `Constraints and limitations: ${this.answers.context_constraints}. `;
        }
        
        if (this.answers.context_preferences && this.answers.context_preferences.length > 0) {
            const preferences = this.answers.context_preferences;
            let preferenceText = 'Please adapt your response style as follows: ';
            
            if (preferences.includes('detailed_explanations')) {
                preferenceText += 'Provide comprehensive, step-by-step explanations. ';
            }
            if (preferences.includes('concise_responses')) {
                preferenceText += 'Keep responses brief and to-the-point. ';
            }
            if (preferences.includes('technical_jargon')) {
                preferenceText += 'Use appropriate technical terminology and concepts. ';
            }
            if (preferences.includes('simple_language')) {
                preferenceText += 'Use plain language and avoid unnecessary technical jargon. ';
            }
            if (preferences.includes('examples_included')) {
                preferenceText += 'Always include practical examples. ';
            }
            if (preferences.includes('visual_formatting')) {
                preferenceText += 'Use clear structure with bullet points, tables, and formatting. ';
            }
            
            context += preferenceText;
        }
        
        if (this.answers.context_target_audience) {
            context += `Target audience: ${this.answers.context_target_audience}. `;
        }
        
        if (this.answers.context_success_criteria) {
            context += `Success criteria: ${this.answers.context_success_criteria}. `;
        }
        
        if (extraPreferences) {
            context += `Additional preferences and requirements: ${extraPreferences}. `;
        }
        
        return context;
    }

    getOutputFormatSection(outputFormats) {
        if (outputFormats.length === 0) return '';
        
        let format = 'Please format your response as follows: ';
        
        if (outputFormats.includes('step_by_step')) {
            format += 'Provide step-by-step instructions. ';
        }
        
        if (outputFormats.includes('code_examples')) {
            format += 'Include working code examples with comments. ';
        }
        
        if (outputFormats.includes('explanations')) {
            format += 'Provide detailed explanations and reasoning. ';
        }
        
        if (outputFormats.includes('bullet_points')) {
            format += 'Use bullet points for clarity. ';
        }
        
        if (outputFormats.includes('structured_data')) {
            format += 'Present information in structured format (tables, lists). ';
        }
        
        if (outputFormats.includes('creative_format')) {
            format += 'Use creative and engaging presentation style. ';
        }
        
        return format;
    }

    getAISpecificOptimizations(aiPlatform, aiInfo) {
        const optimizations = {
            'chatgpt': 'Use clear, conversational language. Break down complex tasks into manageable steps. ',
            'claude': 'Provide detailed reasoning and analysis. Ask for step-by-step thought processes. ',
            'gemini': 'Leverage research capabilities and fact-checking. Request sources and citations. ',
            'copilot': 'Focus on code generation and programming tasks. Provide clear code context. ',
            'copilot-x': 'Use advanced coding patterns and architectural considerations. ',
            'cursor': 'Emphasize code quality, maintainability, and best practices. ',
            'perplexity': 'Frame as research questions and request credible sources. ',
            'bard': 'Use natural, conversational approach with creative solutions. ',
            'servicenow': 'Follow ServiceNow best practices and governance standards. '
        };
        
        return optimizations[aiPlatform] || '';
    }

    getClosingInstructions(aiPlatform) {
        const closings = {
            'chatgpt': 'Please provide a comprehensive response that addresses all aspects of the request.',
            'claude': 'Please provide a thorough analysis with detailed reasoning and explanations.',
            'gemini': 'Please provide a well-researched response with credible sources and citations.',
            'copilot': 'Please provide clean, well-documented code that follows best practices.',
            'copilot-x': 'Please provide enterprise-grade code with proper architecture and testing.',
            'cursor': 'Please provide maintainable, efficient code with clear documentation.',
            'perplexity': 'Please provide a research-backed response with reliable sources.',
            'bard': 'Please provide a creative, engaging response with multiple perspectives.',
            'servicenow': 'Please provide a solution that follows ServiceNow standards and best practices.'
        };
        
        return closings[aiPlatform] || 'Please provide a comprehensive and helpful response.';
    }

    showAITips(aiInfo) {
        const tipsContainer = document.getElementById('aiTips');
        tipsContainer.innerHTML = `
            <h3><i class="${aiInfo.icon}"></i> ${aiInfo.name} Best Practices</h3>
            <ul>
                ${aiInfo.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        `;
    }

    async copyPrompt() {
        const promptText = document.getElementById('generatedPrompt').value;
        
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(promptText);
            } else {
                const textArea = document.createElement('textarea');
                textArea.value = promptText;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
            
            const copyBtn = document.getElementById('copyBtn');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> <span>Copied!</span>';
            copyBtn.style.background = 'var(--success-500)';
            copyBtn.style.color = 'white';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = '';
                copyBtn.style.color = '';
            }, 2000);
            
            this.showToast('Prompt copied to clipboard!', 'success');
        } catch (err) {
            console.error('Copy failed:', err);
            this.showToast('Unable to copy. Please select and copy manually.', 'error');
        }
    }

    addDynamicContextQuestions() {
        const selectedContexts = this.answers.context_details || [];
        const contextQuestions = this.getContextQuestionTemplates();
        
        const contextIndex = this.questions.findIndex(q => q.id === 'context_details');
        const insertIndex = contextIndex + 1;
        
        this.questions = this.questions.filter(q => !q.id.startsWith('context_') && q.id !== 'extra_preferences');
        
        selectedContexts.forEach(contextType => {
            if (contextQuestions[contextType]) {
                this.questions.splice(insertIndex, 0, contextQuestions[contextType]);
            }
        });
        
        this.questions.push({
            id: 'extra_preferences',
            title: 'Any extra preferences or requirements?',
            description: 'Add any additional preferences, requirements, or special considerations for your task.',
            type: 'textarea',
            placeholder: 'e.g., Must use Python 3.8+, Should follow company coding standards, Need to be completed by Friday, Must be accessible to beginners, Prefer concise responses, etc.'
        });
        
        this.renderQuestion();
        this.updateProgress();
        this.updateNavigation();
    }

    rebuildDynamicContextQuestions() {
        const selectedContexts = this.answers.context_details || [];
        const contextQuestions = this.getContextQuestionTemplates();
        
        const contextIndex = this.questions.findIndex(q => q.id === 'context_details');
        const insertIndex = contextIndex + 1;
        
        this.questions = this.questions.filter(q => !q.id.startsWith('context_') && q.id !== 'extra_preferences');
        
        selectedContexts.forEach(contextType => {
            if (contextQuestions[contextType]) {
                this.questions.splice(insertIndex, 0, contextQuestions[contextType]);
            }
        });
        
        this.questions.push({
            id: 'extra_preferences',
            title: 'Any extra preferences or requirements?',
            description: 'Add any additional preferences, requirements, or special considerations for your task.',
            type: 'textarea',
            placeholder: 'e.g., Must use Python 3.8+, Should follow company coding standards, Need to be completed by Friday, Must be accessible to beginners, Prefer concise responses, etc.'
        });
    }

    getContextQuestionTemplates() {
        return {
            'experience_level': {
                id: 'context_experience_level',
                title: 'What is your experience level?',
                description: 'This helps the AI tailor the response to your skill level.',
                type: 'radio',
                options: [
                    { value: 'beginner', label: 'Beginner', description: 'New to this topic, need basic explanations' },
                    { value: 'intermediate', label: 'Intermediate', description: 'Some experience, comfortable with moderate complexity' },
                    { value: 'advanced', label: 'Advanced', description: 'Experienced, can handle complex concepts' },
                    { value: 'expert', label: 'Expert', description: 'Very experienced, looking for advanced insights' }
                ]
            },
            'project_context': {
                id: 'context_project_context',
                title: 'Tell us about your project context',
                description: 'Provide background information about your project or work environment.',
                type: 'textarea',
                placeholder: 'e.g., Building a web application using React, Working on a data analysis project for a client, Creating content for a tech blog, etc.'
            },
            'constraints': {
                id: 'context_constraints',
                title: 'What are your constraints and limitations?',
                description: 'Let us know about any time, budget, technical, or other constraints.',
                type: 'textarea',
                placeholder: 'e.g., Must be completed by Friday, Limited to free tools only, Needs to work on mobile devices, Must follow company security policies, etc.'
            },
            'preferences': {
                id: 'context_preferences',
                title: 'What are your style preferences?',
                description: 'How would you like the AI to communicate with you?',
                type: 'checkbox',
                options: [
                    { value: 'detailed_explanations', label: 'Detailed explanations', description: 'Comprehensive, step-by-step explanations' },
                    { value: 'concise_responses', label: 'Concise responses', description: 'Brief, to-the-point answers' },
                    { value: 'technical_jargon', label: 'Technical jargon', description: 'Use technical terminology and concepts' },
                    { value: 'simple_language', label: 'Simple language', description: 'Avoid technical jargon, use plain language' },
                    { value: 'examples_included', label: 'Examples included', description: 'Always provide practical examples' },
                    { value: 'visual_formatting', label: 'Visual formatting', description: 'Use bullet points, tables, and clear structure' }
                ]
            },
            'target_audience': {
                id: 'context_target_audience',
                title: 'Who is your target audience?',
                description: 'Who will be using or seeing the output from this AI interaction?',
                type: 'textarea',
                placeholder: 'e.g., My development team, Clients who are non-technical, Students learning programming, General public, etc.'
            },
            'success_criteria': {
                id: 'context_success_criteria',
                title: 'How will you measure success?',
                description: 'What would make this AI interaction successful for you?',
                type: 'textarea',
                placeholder: 'e.g., Code that compiles without errors, Clear understanding of the concept, Actionable next steps, Time saved on research, etc.'
            }
        };
    }

    startNewPrompt() {
        console.log('startNewPrompt() called');
        this.showLoading();
        
        setTimeout(() => {
            this.currentStep = 0;
            this.answers = {};
            this.questions = this.initializeQuestions();
            
            console.log('Reset currentStep to:', this.currentStep);
            console.log('Reset answers to:', this.answers);
            console.log('Reset questions to initial state, total questions:', this.questions.length);
            
            const resultContainer = document.getElementById('resultContainer');
            const questionContainer = document.getElementById('questionContainer');
            const navigation = document.getElementById('navigation');
            
            if (resultContainer) {
                resultContainer.style.display = 'none';
            }
            
            if (questionContainer) {
                questionContainer.style.display = 'block';
            }
            
            if (navigation) {
                navigation.style.display = 'flex';
            }
            
            this.updateProgress();
            this.updateNavigation();
            this.renderQuestion();
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.hideLoading();
            
            this.showToast('Started new prompt generation', 'success');
        }, 500);
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AIPromptOptimizerModern();
});

// Add CSS for toast notifications
const toastStyles = `
.toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1080;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.toast {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
    max-width: 300px;
    font-size: 14px;
    font-weight: 500;
}

.toast-show {
    transform: translateX(0);
}

.toast-success {
    border-left: 4px solid #4caf50;
    color: #2e7d32;
}

.toast-error {
    border-left: 4px solid #f44336;
    color: #c62828;
}

.toast-info {
    border-left: 4px solid #2196f3;
    color: #1565c0;
}

[data-theme="dark"] .toast {
    background: #2d2d2d;
    border-color: #424242;
    color: #ffffff;
}
`;

// Inject toast styles
const styleSheet = document.createElement('style');
styleSheet.textContent = toastStyles;
document.head.appendChild(styleSheet);
